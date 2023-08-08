import React from "react";

import {
    AuthenticateUserWithEmailAndPassword,
    AuthenticateUserWithGoogle
} from "../../database/auth_services";



function MainAuthenticationPage() {
    const [isForLogInFlag, setIsForLogInFlag] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleIsForLogInFlag = () => setIsForLogInFlag(!isForLogInFlag);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    
    const handleAuthentication = () => {
        AuthenticateUserWithEmailAndPassword(isForLogInFlag, email, password);
    }
    const handleAuthenticationWithGoogle = () => {
        AuthenticateUserWithGoogle();
    };

    return (
        <div className="flex flex-col justify-center bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-center">{isForLogInFlag ? "Вход" : "Регистрация"}</h2>
            <div className="flex flex-col justify-center items-center" >
                <div className="inline-block w-64 mb-4">
                    <label className="block font-semibold mb-1">Имейл</label>
                    <input
                        className="inline-block w-full px-4 py-2 rounded border"
                        type="email"
                        value={email}
                        onChange={handleEmailChange} />
                </div>
                <div className="inline-block w-64 mb-4">
                    <label className="block font-semibold mb-1">Парола</label>
                    <input
                        className="inline-block w-full px-4 py-2 rounded border"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange} />
                </div>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAuthentication}>
                    {isForLogInFlag ? "Влез" : "Регистрирай се"}
                </button>
                <p className="mt-2">
                {isForLogInFlag ? "Нямате акаунт?" : "Вече имате акаунт?"}{" "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={handleIsForLogInFlag} >
                        {isForLogInFlag ? "Регистрирайте се тук" : "Влезте тук"}
                    </span>
                </p>
            </div>

            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleAuthenticationWithGoogle}>
                Влез с Google профил
            </button>
        </div>
    );
}

export default MainAuthenticationPage;
