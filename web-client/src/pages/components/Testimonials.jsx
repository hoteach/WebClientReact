import mother from "../assets/stock-photos/mothers-daughters-look-alike-3.jpg"
import man from "../assets/stock-photos/photo-1682241367368-6387d5d4921a.jpg"

export function Testimonials() {
    function App(){
        return window.open('https://app.mealmasterbot.com');
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md flex flex-col justify-center items-center text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                        <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Read what our users are saying about Meal Master</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a onClick={App} className="inline-block cursor-pointer rounded-lg bg-orange-400 px-6 py-3.5 text-center font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Start using Meal Master</a>
                        </div>
                    </div>
                </div>
            </section>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Meal Master has completely changed how I plan and cook meals for my family. It's so easy to use, and the recipes are fantastic!"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src={mother} alt="profile picture" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Sarah</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Busy Mom</cite>
                    </div>
                </figcaption>
            </figure>
            <figure className="max-w-screen-md mx-auto text-center mb-10">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"I love how Meal Master understands my fitness goals and suggests the perfect meals to keep me on track!"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src={man} alt="profile picture" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Mike</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Fitness Enthusiast</cite>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}