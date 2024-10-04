import React from 'react';
import roadmapImage from '../../assets/flaimy/FlaimyStanding.png';

const Roadmap = () => {
    return (
        <div className="bg-white flex items-start flex-row justify-center">
            <div className="w-1/3 p-8 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4"><span className='text-maincol bg-[#ff3300] rounded-2xl px-2'>HoT</span> Points</h2>
                <p className="mb-4">Track your progress through these key milestones in your programming journey. Each point represents a significant step in your learning path.</p>
                <img src={roadmapImage} alt="Roadmap" className="w-96" />
            </div>
            <div className="w-2/3 max-w-xl p-8">
                <div className="flow-root">
                    <ul className="mb-8">
                        <li>
                            <div className="relative pb-8">
                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                    <div>
                                        <div className="relative px-1">
                                            <div className="h-8 w-8 bg-maincol rounded-full ring-8 ring-white flex items-center justify-center">
                                                <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-0">
                                        <div className="text-md text-gray-500">
                                            <div>
                                                <a href="#" className="font-medium text-gray-900 mr-2">Learn Python Basics</a>
                                                <a href="#"
                                                className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                                                    </div>
                                                    <div className="ml-3.5 font-medium text-gray-900">Completed</div>
                                                </a>
                                            </div>
                                            <span className="whitespace-nowrap text-sm">Milestone 1</span>
                                        </div>
                                        <div className="mt-2 text-gray-700">
                                            <p>
                                                - Master basic Python syntax and data types
                                                <br />
                                                - Understand control structures and loops
                                                <br />
                                                - Learn about functions and modules
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="relative pb-8">
                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                    <div>
                                        <div className="relative px-1">
                                            <div className="h-8 w-8 bg-maincol rounded-full ring-8 ring-white flex items-center justify-center">
                                                <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-0">
                                        <div className="text-md text-gray-500">
                                            <div>
                                                <a href="#" className="font-medium text-gray-900 mr-2">Build a Web Application</a>

                                                <a href="#"
                                                className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" aria-hidden="true"></span>
                                                    </div>
                                                    <div className="ml-3.5 font-medium text-gray-900">Pending</div>
                                                </a>
                                            </div>
                                            <span className="whitespace-nowrap text-sm">Milestone 2</span>
                                        </div>
                                        <div className="mt-2 text-gray-700">
                                            <p>
                                                - Learn HTML, CSS, and JavaScript basics
                                                <br />
                                                - Understand server-side programming with Node.js
                                                <br />
                                                - Create a simple full-stack application
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="relative pb-8">
                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                <div className="relative flex items-start space-x-3">
                                    <div>
                                        <div className="relative px-1">
                                            <div className="h-8 w-8 bg-maincol rounded-full ring-8 ring-white flex items-center justify-center">
                                                <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-0">
                                        <div className="text-md text-gray-500">
                                            <div>
                                                <a href="#" className="font-medium text-gray-900 mr-2">Master Data Structures</a>
                                            </div>
                                            <span className="whitespace-nowrap text-sm">Milestone 3</span>
                                        </div>
                                        <div className="mt-2 text-gray-700">
                                            <p>
                                                - Study arrays, linked lists, and hash tables
                                                <br />
                                                - Understand trees and graphs
                                                <br />
                                                - Implement common algorithms using these structures
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;