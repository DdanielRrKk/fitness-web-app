import React from 'react';

import { useSelector} from 'react-redux';
import { NavLink, Outlet, Navigate } from 'react-router-dom';

import LandingPage from './landing/landingPage';

import Logo from '../assets/mtp-dashboard-logo.png';

function RootPage() {
    const isAuthenticated = useSelector(state => state.setup.isAuthenticated);
    console.log('isAuthenticated root: ', isAuthenticated);

    const handleIsActiveNavLink = ({ isActive }) => isActive ? "navbar-button-focused block" : "navbar-button block";

    return isAuthenticated ?
        <div className='flex w-full h-full'>
            <nav className='flex flex-col w-32 h-full justify-between fixed p-4 bg-primary'>
                <ul className="flex flex-col gap-4">
                    <img 
                        className='mb-4'
                        src={Logo} 
                        alt="mtp-logo-icon" />

                    <li>
                        <NavLink 
                            to='home'
                            className={handleIsActiveNavLink}>
                                Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='meal'
                            className={handleIsActiveNavLink}>
                                Meal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='workout'
                            className={handleIsActiveNavLink}>
                                Workout
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='learn'
                            className={handleIsActiveNavLink}>
                                Learn
                        </NavLink>
                    </li>
                </ul>

                <ul className='flex flex-col gap-4'>
                    <li>
                        <NavLink 
                            to='help'
                            className={handleIsActiveNavLink}>
                                Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='settings'
                            className={handleIsActiveNavLink}>
                                Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <main className='w-full flex flex-col items-center ml-32'>
                <Outlet />
            </main>
        </div>
    : <LandingPage />;
}

export default RootPage;
