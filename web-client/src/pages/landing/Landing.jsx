import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFire, FaRocket } from 'react-icons/fa';
import logo from '../../assets/logos/Ho.png';
import { useGoogleLogin } from '@react-oauth/google';

export default function Landing() {
    const navigate = useNavigate();
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    
    useEffect(() => {
        /* global google */
        window.google.accounts.id.initialize({
            client_id: clientId, // Replace with your Google client ID
            callback: handleGoogleLogin
        });

        // Automatically show the Google login prompt on page enter
        window.google.accounts.id.prompt();
    }, []);

    // Custom login handler
    const handleGoogleLogin = (response) => {
        console.log('Login Success:', response);
        // Perform your login logic here (e.g., send the token to your backend)
        navigate('/dashboard');
    };

    const handleGoogleClick = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            
            navigate('/dashboard');
        },
        flow: 'auth-code',
    });

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 relative">
            <div className="bg-white rounded-3xl w-[32rem] flex flex-col justify-center items-center border-2 p-8">
                <img src={logo} alt="Logo" className="w-56 mb-8" />
                <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text">Activate your account</h2>
                <p className="text-center text-gray-600 mb-8">Join us and ignite your journey to success!</p>

                <button onClick={handleGoogleClick} className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:from-orange-600 hover:to-red-600 transition duration-300 flex items-center justify-center w-full">
                    <FaGoogle className="mr-2" />
                    Login with Google
                </button>

                <div className="mt-12 flex justify-center space-x-8">
                    <div className="text-center">
                        <FaFire className="text-4xl text-maincol mb-2 mx-auto" />
                        <p className="font-semibold text-gray-700">Blazing Fast</p>
                    </div>
                    <div className="text-center">
                        <FaRocket className="text-4xl text-maincol mb-2 mx-auto" />
                        <p className="font-semibold text-gray-700">Powerful Features</p>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600">
                    <p>Experience the heat of innovation</p>
                    <p>Fuel your success with our platform</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-maincol shadow-lg via-red-500 to-maincol"></div>
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-maincol shadow-lg via-red-500 to-maincol"></div>
        </div>
    );
}
