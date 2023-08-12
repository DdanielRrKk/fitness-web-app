import React from "react";

import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => navigate('/auth')

    return (
        <div className="flex w-screen h-screen items-center justify-center">
            <button 
                className="p-4 rounded-lg bg-primary text-white"
                onClick={handleLoginClick}>
                Start by logging in
            </button>
        </div>
    );
}

export default LandingPage;
