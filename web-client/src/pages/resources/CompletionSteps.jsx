import React from 'react';
import FlaimyHi from '../../assets/flaimy/FlaimyHi2.png';

const CompletionSteps = () => {
    return (
        <section className="py-36 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap justify-center md:justify-between -m-6 mb-20">
                        <div className="w-auto p-6">
                            <a className="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800" href="#">
                                <p className="mb-2 px-7">Set Your Preferences</p>
                                <div className="h-0.5 bg-gradient-cyan"></div>
                            </a>
                        </div>
                        <div className="w-auto p-6">
                            <a className="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800" href="#">
                                <p className="mb-2 px-7">Unlock The Resources</p>
                                <div className="h-0.5 bg-gray-200"></div>
                            </a>
                        </div>
                        <div className="w-auto p-6">
                            <a className="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800" href="#">
                                <p className="mb-2 px-7">Start Your Project</p>
                                <div className="h-0.5 bg-gray-200"></div>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-11">
                        <div className="w-full md:w-1/2 p-11">
                            <img className="mx-auto" src={FlaimyHi} alt="" />
                        </div>
                        <div className="w-full md:w-1/2 p-11">
                            <h2 className="mb-6 font-heading font-bold text-5xl text-gray-900">Start with creating a free account on Gradia.</h2>
                            <p className="mb-9 text-gray-900 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit justo, sit iaculis ultrices vitae pulvinar tellus. Volutpat, ut lacus tristique blandit ligula.</p>
                            <div className="flex flex-wrap -m-2">
                                <div className="w-full lg:w-auto p-2">
                                    <button className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-400 transition duration-300 flex items-center justify-center w-full">
                                        Continue
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompletionSteps;