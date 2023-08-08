import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setIsUserSetup } from '../../redux/slices/setupSlice';

import { ReadUserDataObject } from '../../database/user_services';

import MainHomePage from './mainHomePage';
import SetupHomePage from './setupHomePage';

function HomePage() {
    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = React.useState(null);

    const isUserSetup = useSelector(state => state.setup.isUserSetup);

    React.useEffect(() => {
        ReadUserDataObject().then(data => setCurrentUser(data));
    }, [dispatch]);

    console.log('currentUser: ', currentUser);

    if(!isUserSetup) return <SetupHomePage />;
    return <MainHomePage />;
}

export default HomePage;
