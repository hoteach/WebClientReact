import React from 'react';

const Dashboard = () => {
    return (
        <div className="h-full content-center">
            <div className="max-w-2xl mx-auto bg-white border-2 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-black">Set Your Preferences</h2>
                <p className="text-center text-gray-600 mb-8">Customize your experience and let's get to know you better!</p>
                
                {/* Input Fields */}
                <div className="space-y-6 mb-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input type="number" id="age" placeholder="Your Age" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tech Stack</label>
                        <div className="grid grid-cols-3 gap-3">
                            {['C#', 'JavaScript', 'Python', 'Java', 'Ruby', 'Go'].map((tech) => (
                                <div key={tech} className="flex items-center">
                                    <input type="checkbox" id={tech} className="h-4 w-4 text-maincol focus:ring-maincol border-gray-300 rounded" />
                                    <label htmlFor={tech} className="ml-2 block text-sm text-gray-700">{tech}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-400 transition duration-300 flex items-center justify-center w-full">
                    Save Preferences
                </button>

                <div className="mt-12 flex justify-center">
                    <div className="text-center bg-gradient-to-r from-white to-yellow-50 p-6 rounded-2xl shadow-inner">
                        <div className="mb-4">
                            <svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-gray-800">Your preferences help us tailor the perfect experience for you!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;