import React from 'react';

import { Link, Outlet } from 'react-router-dom';

function RootPage() {
    return (
        <div className="flex w-full">
            <div className="w-32 ">
                <div className="w-32 h-screen flex flex-col justify-between fixed bg-primary p-4">
                    <div className="flex flex-col space-y-4">
                        <Link   to="/home" 
                                className="navbar-button">
                            Home
                        </Link>

                        <Link   to="/meal"
                                className="navbar-button">
                            Meal
                        </Link>

                        <Link   to="/workout"
                                className="navbar-button">
                            Workout
                        </Link>
                        
                        <Link   to="/learn"
                                className="navbar-button">
                            Learn
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link   to="/settings"
                                className="navbar-button">
                            Settings
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full justify-center p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default RootPage;
