import { FaGoogle, FaFire, FaRocket } from 'react-icons/fa';
import logo from '../../assets/logos/Ho.png';

export default function Landing() {
    return (
        <div className="bg-amber-400 min-h-screen text-white">
            <header className="bg-slate-200 p-4 shadow-lg border-b-4 border-red-700">
                <div className="container mx-auto flex items-center justify-between">
                    <img src={logo} alt="Logo" className="w-56" />
                    
                    <nav className="space-x-4">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <button
                                key={item}
                                className="bg-red-600 text-white px-4 py-2 rounded-md font-bold shadow-md hover:bg-red-700 transition duration-300"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                    
                    <button className="bg-white text-black px-4 py-2 rounded-md font-bold shadow-md hover:bg-gray-100 transition duration-300 flex items-center">
                        <FaGoogle className="mr-2" />
                        Login with Google
                    </button>
                </div>
            </header>

            <main className="container mx-auto mt-16 px-4">
                {/* First Funnel Component */}
                <section className="mb-16 bg-gradient-to-br from-amber-700 to-red-800 rounded-lg p-8 shadow-xl border-4 border-orange-500">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                        <FaFire className="mr-2 text-yellow-400" />
                        Ignite Your Success
                    </h2>
                    <p className="mb-6 text-lg">
                        Discover how our services can fuel your business growth and set your profits ablaze.
                    </p>
                    <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-bold shadow-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
                        Learn More
                    </button>
                </section>

                {/* Second Funnel Component */}
                <section className="bg-gradient-to-br from-red-800 to-amber-700 rounded-lg p-8 shadow-xl border-4 border-red-600">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                        <FaRocket className="mr-2 text-yellow-400" />
                        Skyrocket Your Results
                    </h2>
                    <p className="mb-6 text-lg">
                        Ready to take action? Our proven strategies will launch your business to new heights.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-red-500 transition duration-300 transform hover:scale-105">
                        Get Started Now
                    </button>
                </section>
            </main>
        </div>
    )
}