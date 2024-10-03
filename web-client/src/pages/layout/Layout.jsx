import { Outlet } from "react-router-dom";
import { FaGoogle, FaFire, FaRocket, FaHome, FaUser, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';
import logo from '../../assets/logos/Ho.png';
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  function handleDashboard() {
    console.log(`dashboard`);
    navigate(`dashboard`);
  }
  function handleLanding() {
    navigate(`landing`);
  }
  function handleFunnel() {
    navigate(`funnel`);
  }
  function handleRoadmap() {
    navigate(`roadmap`);
  }

  return (
    <div className="bg-white min-h-screen flex text-gray-800">
      {/* Left Sidebar */}
      <div className="w-64 bg-white p-6 flex flex-col border-r-2 border-gray-200 fixed h-screen">
          <img src={logo} alt="Logo" className="w-56 mb-8 self-center" />
          <nav className="flex-grow">
              <ul className="space-y-3">
                  <li>
                      <button onClick={handleRoadmap} className="flex cursor-pointer items-center text-gray-700 hover:text-black border-2 border-transparent hover:border-gray-200 rounded-xl p-3 transition-all duration-200 group">
                          <FaUser className="mr-3 text-lg" />
                          <span>Roadmap</span>
                      </button>
                      <button onClick={handleDashboard} className="flex cursor-pointer items-center text-gray-700 hover:text-black border-2 border-transparent hover:border-gray-200 rounded-xl p-3 transition-all duration-200 group">
                          <FaHome className="mr-3 text-lg" />
                          <span>Dashboard</span>
                      </button>
                      <button onClick={handleLanding} className="flex cursor-pointer items-center text-gray-700 hover:text-black border-2 border-transparent hover:border-gray-200 rounded-xl p-3 transition-all duration-200 group">
                          <FaFire className="mr-3 text-lg" />
                          <span>Landing</span>
                      </button>
                  </li>
              </ul>
          </nav>
          <button className="mt-auto flex items-center text-gray-700 border-2 border-transparent hover:border-maincol hover:text-black rounded-xl p-3 transition-all duration-200 w-full group">
              <FaSignOutAlt className="mr-3 text-lg" />
              <span>Logout</span>
          </button>
      </div>
      {/* Main Content */}
      <div className="flex-grow flex flex-col pl-64">
        {/* Header */}
        <header className="bg-white p-4 h-20 flex justify-between items-center border-b-2 border-gray-200 fixed w-full pr-64">
            <div className="flex items-center">
                <span className="ml-4 text-md font-medium text-black">/dashboard</span>
            </div>
            <div className="flex items-center space-x-6 mr-4">
                <FaCog className="text-gray-600 hover:text-maincol cursor-pointer text-xl transition-colors duration-200" />
                <div className="relative">
                    <FaBell className="text-gray-600 hover:text-maincol cursor-pointer text-xl transition-colors duration-200" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </div>
                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full ring-2 ring-maincol" />
            </div>
        </header>
        <main className="pt-20 h-full"> {/* Add padding-top to account for fixed header */}
            <Outlet />
        </main>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-maincol shadow-lg via-red-500 to-maincol"></div>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-maincol shadow-lg via-red-500 to-maincol"></div>
    </div>
  );
}
