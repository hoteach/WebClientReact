import logo from "../assets/master-33.png"
import { useNavigate } from "react-router-dom";

export function Header() {

    function App(){
        return window.open('https://app.mealmasterbot.com');
    }
    const navigate = useNavigate();

    function Tutorial(){
        navigate('/tutorial');
    }
    function Home(){
        navigate('/');
    }
    function Terms(){
      navigate('/terms');
  }
  function Privacy(){
      navigate('/privacy');
  }
    return (
      <header className="flex flex-col justify-center items-center mt-10">
        <nav className="bg-white w-full border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a onClick={Home} className="flex cursor-pointer items-center">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Meal Master
              </span>
            </a>
            <div className="flex items-center lg:order-2 cursor-pointer">
              <a
                onClick={App}
                className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-orange-400 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    onClick={Home}
                    className="block py-2 pr-4 pl-3 cursor-pointer rounded bg-orange-400 lg:bg-transparent text-gray-700 lg:p-0 hover:text-orange-400 dark:text-white"

                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={Tutorial}
                    className="block py-2 cursor-pointer pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Tutorial
                  </a>
                </li>
                <li>
                  <a
                    onClick={Terms}
                    className="block py-2 pr-4 pl-3 cursor-pointer text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    onClick={Privacy}
                    className="block py-2 pr-4 pl-3 cursor-pointer text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  