import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setIsAuthenticated, setIsUserSetup } from './redux/slices/setupSlice';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import { ReadUserDataObject } from './database/user_services';

import RootPage from "./pages/rootPage.jsx";
import HomePage from './pages/home/homePage';

import MainAuthenticationPage from './pages/auth/mainAuthenticationPage.jsx';
import MainMealPage from './pages/meal/mainMealPage.jsx';
import MainWorkoutPage from './pages/workout/mainWorkoutPage.jsx';
import MainLearnPage from './pages/learn/mainLearnPage.jsx';
import MainSettingsPage from './pages/settings/mainSettingsPage.jsx';

import ErrorPage from './pages/errorPage.jsx';
// import LoadingPage from './pages/loadingPage';


const authRouter = createBrowserRouter([{ 
  index: true, path: "/*", element: <MainAuthenticationPage />, errorElement: <ErrorPage />
}]);

const mainRouter = createBrowserRouter([
  {
    path: "/", element: <RootPage />, errorElement: <ErrorPage />, children: [
      { path: "/home", element: <HomePage />, errorElement: <ErrorPage /> },
      { path: "/meal", element: <MainMealPage />, errorElement: <ErrorPage /> },
      { path: "/workout", element: <MainWorkoutPage />, errorElement: <ErrorPage /> },
      { path: "/learn", element: <MainLearnPage />, errorElement: <ErrorPage /> },
      { path: "/settings", element: <MainSettingsPage />, errorElement: <ErrorPage /> },
      { path: "/*", element: <ErrorPage /> }
    ]
  },
]);

function App() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.setup.isAuthenticated);
  console.log('isAuthenticated: ', isAuthenticated);

  React.useEffect(() => {
    onAuthStateChanged(auth, () => {
      dispatch(setIsAuthenticated(true));
      ReadUserDataObject().then((user) => {
        dispatch(setIsUserSetup(user !== null));
      });
    });
  }, [dispatch]);

  const router = isAuthenticated ? mainRouter : authRouter;
  return ( <RouterProvider router={router} /> );
}

export default App;
