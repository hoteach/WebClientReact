import logo from "../assets/master-33.png"
import { useNavigate } from "react-router-dom";

export function Footer() {
    const navigate = useNavigate();
    function App(){
        return window.open('https://app.mealmasterbot.com');
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
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 flex flex-col justify-center items-center">
            <div className="border-t-4 border-gray-200 border-dotted w-3/4 m-5"></div>
        <div className="mx-auto max-w-screen-xl text-center flex flex-col justify-center items-center">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Meal Master
              </span>
            </a>
            <p className="my-3 text-gray-500 dark:text-gray-400">support@mealmasterbot.com</p>
            <ul className="flex flex-wrap justify-center items-center mb-3 text-gray-900 dark:text-white">
                <li>
                    <a onClick={Home} className="mr-4 cursor-pointer hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a onClick={App} className="mr-4 hover:underline md:mr-6 cursor-pointer">Web App</a>
                </li>
                <li>
                    <a onClick={Privacy} className="mr-4 hover:underline cursor-pointer md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a onClick={Terms} className="mr-4 hover:underline cursor-pointer md:mr-6">Terms of Service</a>
                </li>
            </ul>
            <p className="mt-1 text-sm text-gray-400">Einzelunternehmen stavate e.K. – Diyan Yankov</p>
            <p className="text-sm text-gray-400">Philipp-Zorn-Straße 9, 91522 Ansbach, Germany</p>
            <p className="text-sm text-gray-400">Authorized representative: Diyan Yankov</p>
            <p className="mb-3 text-sm text-gray-400">VAT ID number per § 27a UStG:DE333662582</p>
            <span className="text-sm text-gray-400 sm:text-center">Meal Master © 2024 All Rights Reserved</span>
        </div>
        </footer>
    );
}