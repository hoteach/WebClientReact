import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFire, FaRocket } from 'react-icons/fa';
import logo from '../../assets/logos/Ho.png';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useAuth } from '../contextAndRoute/AuthContext';
import axios from 'axios';

export default function Login() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    const { login, logout } = useAuth();

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
                    .then(async (res) => {
                        setProfile(res.data);

                        return axios.post('https://hoteachapi.azurewebsites.net/api/GetUserData', { googleId: res.data.email });
                    })
                    .then(apiResponse => {
                        const userData = apiResponse.data;
                        const regex = /"IsActivated"\s*:\s*(true|false)/;
                        const match = userData.match(regex);

                        let isActivated = null;
                        if (match && match[1]) {
                            isActivated = match[1] === 'true';
                        }

                        if (isActivated) {
                            login();
                            navigate("/dashboard");
                        } else {
                            logout();
                            setUser([]);
                            googleLogout();
                            navigate("/funnel");
                        }
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user, login, logout, navigate]
    );

    const loginGoogle = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            setUser(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-800 relative">
            <div className="bg-white rounded-3xl w-[32rem] flex flex-col justify-center items-center border-2 p-8">
                <img src={logo} alt="Logo" className="w-56 mb-8" />
                <h2 className="text-3xl font-bold mb-6 text-center text-black bg-clip-text">Access your account</h2>
                <p className="text-center text-gray-600 mb-8">Ignite your journey to success!</p>

                <button onClick={loginGoogle} className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:from-orange-600 hover:to-red-600 transition duration-300 flex items-center justify-center w-full">
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