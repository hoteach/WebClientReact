import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFire, FaRocket } from 'react-icons/fa';
import logo from '../../assets/logos/Ho.png';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../contextAndRoute/AuthContext';
import { useState } from 'react';
import axios from 'axios';

export default function ActivationPage() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then( async(res) => {
                        setProfile(res.data);
                        const queryParams = window.location.href;
                        const paymentIntentId = queryParams.match(/\?(.+)/);
                        localStorage.setItem('userProfile', JSON.stringify(res.data));
                        await activateAccount(res.data.email, paymentIntentId[1]);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const loginGoogle = useGoogleLogin({
        onSuccess: async(codeResponse) => {
            console.log(codeResponse);
            setUser(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const activateAccount = async (googleId, paymentIntentId) => {
        try {
            const response = await fetch('https://hoteachapi.azurewebsites.net/api/ActivateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ googleId, paymentIntentId }),
            });
            
            const result = await response.json();
            login();
            navigate("/dashboard");
            console.log('Activation result:', result);
        } catch (error) {
            console.error('Error activating account:', error);
        }
    };
    
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 relative">
            <div className="bg-white rounded-3xl w-[32rem] flex flex-col justify-center items-center border-2 p-8">
                <img src={logo} alt="Logo" className="w-56 mb-8" />
                <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text">Activate your account</h2>
                <p className="text-center text-gray-600 mb-8">Join us and ignite your journey to success!</p>

                <button onClick={loginGoogle} className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:from-orange-600 hover:to-red-600 transition duration-300 flex items-center justify-center w-full">
                    <FaGoogle className="mr-2" />
                    Activate with Google
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
