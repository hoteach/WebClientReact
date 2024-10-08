import React from 'react';
import FlaimyHi from '../../assets/flaimy/FlaimyHi.png';

const Dashboard = () => {
    return (
        <div className="h-full content-center">
            <div className="max-w-4xl mx-auto bg-white border-2 p-8 rounded-2xl my-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-black">Set Your Preferences</h2>
                <p className="text-center text-gray-600 mb-8">Customize your experience and let's get to know you better!</p>
                
                {/* Input Fields */}
                <div className="space-y-6 mb-8">
                    {/* Basic Demographic Information */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" />
                        </div>
                        <div>
                            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
                            <select id="ageGroup" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                                <option value="">Select Age Group</option>
                                <option value="gen-z">Gen Z (9 to 24)</option>
                                <option value="millennial">Millennial (25 to 40)</option>
                                <option value="gen-x">Gen X (41 to 56)</option>
                                <option value="baby-boomer">Baby Boomer (57 to 75)</option>
                                <option value="silent">Silent Generation (76 to 93)</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" id="location" placeholder="Country" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" />
                        </div>
                        <div>
                            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">Native Language</label>
                            <select id="language" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                                <option value="">Select Language</option>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="french">French</option>
                                <option value="german">German</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                        <select id="education" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                            <option value="">Select Education Level</option>
                            <option value="highschool">High School</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">Ph.D.</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Learning Preferences */}
                    <div>
                        <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">Learning Goals</label>
                        <textarea id="goals" placeholder="What do you want to achieve?" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" rows="3"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="learningStyle" className="block text-sm font-medium text-gray-700 mb-1">Preferred Learning Style</label>
                            <select id="learningStyle" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                                <option value="">Select Style</option>
                                <option value="visual">Visual</option>
                                <option value="auditory">Auditory</option>
                                <option value="kinesthetic">Kinesthetic</option>
                                <option value="mixed">Mixed</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pace" className="block text-sm font-medium text-gray-700 mb-1">Preferred Pace</label>
                            <select id="pace" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                                <option value="">Select Pace</option>
                                <option value="fulltime">Full-time</option>
                                <option value="parttime">Part-time</option>
                                <option value="selfpaced">Self-paced</option>
                            </select>
                        </div>
                    </div>

                    {/* Skill Level */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-1">Current Job Role</label>
                            <input type="text" id="jobRole" placeholder="Your current position" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" />
                        </div>
                        <div>
                            <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 mb-1">Current Skill Level</label>
                            <select id="skillLevel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                                <option value="">Select Skill Level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>
                    </div>

                    {/* Learning Environment and Constraints */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="timeAvailability" className="block text-sm font-medium text-gray-700 mb-1">Time Availability (hours/week)</label>
                            <input type="number" id="timeAvailability" placeholder="Hours per week" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200" />
                        </div>
                        <div>
                            <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-1">Preferred Learning Schedule</label>
                            <select id="schedule" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-maincol transition-all duration-200">
                                <option value="">Select Schedule</option>
                                <option value="morning">Morning</option>
                                <option value="evening">Evening</option>
                                <option value="weekend">Weekend</option>
                                <option value="flexible">Flexible</option>
                            </select>
                        </div>
                    </div>

                    {/* Psychological Insights */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Motivators (Select all that apply)</label>
                        <div className="grid grid-cols-3 gap-3">
                            {['Career Advancement', 'Personal Interest', 'Skill Development', 'Certification', 'Networking', 'Problem Solving'].map((motivator) => (
                                <div key={motivator} className="flex items-center">
                                    <input type="checkbox" id={motivator} className="h-4 w-4 text-maincol focus:ring-maincol border-gray-300 rounded" />
                                    <label htmlFor={motivator} className="ml-2 block text-sm text-gray-700">{motivator}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-400 transition duration-300 flex items-center justify-center w-full">
                    Save Preferences
                </button>

                <div className="mt-12 flex justify-center">
                    <div className="text-center bg-gradient-to-r from-white to-yellow-100 p-6 rounded-2xl shadow-inner">
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