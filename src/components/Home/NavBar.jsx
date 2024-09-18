import React from 'react'
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();

    function eventsNavigation() {
        navigate('/events')
    }

    function myFunction() {
        var x = document.getElementById("navbar-default");
        x.classList.toggle("hidden");
    }

    return (
        <nav className="bg-transparent absolute right-0 top-2 text-white">
            <div className="flex flex-wrap items-center justify-between mx-auto mt-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    {/* Logo can be added here */}
                </a>

                <button onClick={myFunction} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-black dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                </button>

                <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 bg-black lg:bg-transparent">

                        <li>
                            <a href='#about-recharge' className="block py-1.5 pl-2 pr-3 text-white font-bold lg:hover:bg-transparent lg:border-0 lg:p-0 hover:bg-gray-700 hover:bg-opacity-75 rounded-md transition-all"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                                    borderRadius: '10px', // Rounded corners
                                    padding: '8px 16px',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Translucent shadow
                                    border: '2px solid rgba(255, 255, 255, 0.4)', // Semi-transparent border
                                    backdropFilter: 'blur(5px)', // Optional: subtle blur behind the buttons
                                    transition: '0.3s ease-in-out', // Smooth transition
                                }}>
                                About
                            </a>
                        </li>

                        <li>
                            <button onClick={() => eventsNavigation("/events")} className="block py-1.5 pl-2 pr-3 text-white font-bold lg:hover:bg-transparent lg:border-0 lg:p-0 hover:bg-gray-700 hover:bg-opacity-75 rounded-md transition-all"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                                    borderRadius: '10px', // Rounded corners
                                    padding: '8px 16px',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Translucent shadow
                                    border: '2px solid rgba(255, 255, 255, 0.4)', // Semi-transparent border
                                    backdropFilter: 'blur(5px)', // Optional: subtle blur behind the buttons
                                    transition: '0.3s ease-in-out', // Smooth transition
                                }}>
                                Events
                            </button>
                        </li>

                        <li>
                            <a href='#proshows' className="block py-1.5 pl-2 pr-3 text-white font-bold lg:hover:bg-transparent lg:border-0 lg:p-0 hover:bg-gray-700 hover:bg-opacity-75 rounded-md transition-all"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', 
                                    border: '2px solid rgba(255, 255, 255, 0.4)',
                                    backdropFilter: 'blur(5px)', 
                                    transition: '0.3s ease-in-out',
                                }}>
                                Highlight
                            </a>
                        </li>

                        <li>
                            <a href='#spotlight' className="block py-1.5 pl-2 pr-3 text-white font-bold lg:hover:bg-transparent lg:border-0 lg:p-0 hover:bg-gray-700 hover:bg-opacity-75 rounded-md transition-all"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Translucent shadow
                                    border: '2px solid rgba(255, 255, 255, 0.4)', // Semi-transparent border
                                    backdropFilter: 'blur(5px)', // Optional: subtle blur behind the buttons
                                    transition: '0.3s ease-in-out', // Smooth transition
                                }}>
                                Our Founders
                            </a>
                        </li>

                        <li>
                            <a href='#gallery' className="block py-1.5 pl-1 pr-2 text-white font-bold lg:hover:bg-transparent lg:border-0 lg:p-0 hover:bg-gray-700 hover:bg-opacity-75 rounded-md transition-all"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                                    borderRadius: '10px',
                                    padding: '8px 16px',
                                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Translucent shadow
                                    border: '2px solid rgba(255, 255, 255, 0.4)', // Semi-transparent border
                                    backdropFilter: 'blur(5px)', // Optional: subtle blur behind the buttons
                                    transition: '0.3s ease-in-out', // Smooth transition
                                }}>
                                Gallery
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
