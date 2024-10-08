import React, { useState } from 'react';
import FlaimyHi from '../../assets/flaimy/FlaimyHi2.png';

const CompletionSteps = () => {
    const [activeSection, setActiveSection] = useState('preferences');

    const renderContent = () => {
        switch(activeSection) {
            case 'preferences':
                return (
                    <div className="flex flex-wrap -m-11">
                        <div className="w-full md:w-1/2 p-11">
                            <img className="mx-auto" src={FlaimyHi} alt="" />
                        </div>
                        <div className="w-full md:w-1/2 p-11">
                            <h2 className="mb-6 font-heading font-bold text-5xl text-gray-900">Customize Your Learning Experience</h2>
                            <p className="mb-9 text-gray-900 text-base">To tailor your journey, we need to know more about you. Please fill out a short form about your knowledge and experience. This will help us provide a personalized learning path just for you.</p>
                            <div className="flex flex-wrap -m-2">
                                <div className="w-full lg:w-auto p-2">
                                    <button className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-400 transition duration-300 flex items-center justify-center w-full">
                                        Start Questionnaire
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'resources':
                return (
                    <div className="p-11 text-center">
                        <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <h2 className="mb-6 font-heading font-bold text-5xl text-gray-900">Unlock The Resources</h2>
                        <p className="mb-9 text-gray-700 text-xl">Complete the previous step to access all the resources you need for your journey.</p>
                        <button className="bg-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold shadow-md cursor-not-allowed" disabled>
                            Resources Locked
                        </button>
                    </div>
                );
            case 'project':
                return (
                    <div className="p-11 text-center">
                        <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <h2 className="mb-6 font-heading font-bold text-5xl text-gray-900">Start Your Project</h2>
                        <p className="mb-9 text-gray-700 text-xl">Complete the previous steps to begin your exciting project journey!</p>
                        <button className="bg-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold shadow-md cursor-not-allowed" disabled>
                            Project Locked
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-36 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap justify-center md:justify-between -m-6 mb-20">
                        <div className="w-auto p-6">
                            <a 
                                className={`font-heading font-semibold text-lg text-gray-900 cursor-pointer ${activeSection === 'preferences' ? 'text-secondary' : 'hover:text-gray-800'}`}
                                onClick={() => setActiveSection('preferences')}
                            >
                                <p className="mb-2 px-7">Set Your Preferences</p>
                                <div className={`h-0.5 ${activeSection === 'preferences' ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                            </a>
                        </div>
                        <div className="w-auto p-6">
                            <a 
                                className={`font-heading font-semibold text-lg text-gray-900 cursor-pointer ${activeSection === 'resources' ? 'text-secondary' : 'hover:text-gray-800'}`}
                                onClick={() => setActiveSection('resources')}
                            >
                                <p className="mb-2 px-7">Unlock The Resources</p>
                                <div className={`h-0.5 ${activeSection === 'resources' ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                            </a>
                        </div>
                        <div className="w-auto p-6">
                            <a 
                                className={`font-heading font-semibold text-lg text-gray-900 cursor-pointer ${activeSection === 'project' ? 'text-secondary' : 'hover:text-gray-800'}`}
                                onClick={() => setActiveSection('project')}
                            >
                                <p className="mb-2 px-7">Start Your Project</p>
                                <div className={`h-0.5 ${activeSection === 'project' ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                            </a>
                        </div>
                    </div>
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default CompletionSteps;