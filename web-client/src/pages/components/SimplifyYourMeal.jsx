
import image from "../assets/stock-photos/StockCake-Cooking Together Enjoyably_1724920139.jpg"

export function SimplifyYourMeal() {
    function App(){
        return window.open('https://app.mealmasterbot.com');
    }
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
            <div className="content-center justify-self-start md:col-span-7 md:text-start">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Ready to Simplify Your<br />Mealtime with AI?</h1>
                <p className="max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">Join the Meal Master app to discover how AI can revolutionize your cooking experience.</p>
                <a onClick={App} className="inline-block rounded-lg cursor-pointer bg-orange-400 px-6 py-3.5 text-center font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reserve My Spot Now</a>
            </div>
            <div className="hidden md:col-span-5 md:mt-0 lg:flex">
                <img className="w-[60rem] rounded-2xl" src={image} alt="shopping illustration" />
            </div>
            </div>
        </section>
    );
}