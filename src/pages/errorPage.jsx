import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
      </div>
    );
}

export default ErrorPage;
