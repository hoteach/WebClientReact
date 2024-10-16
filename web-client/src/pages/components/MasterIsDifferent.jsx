import image from "../assets/stock-photos/StockCake-Sizzling Stir-Fry Cooking_1724920160.jpg"

export function MasterIsDifferent() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
                <div className="lg:w-1/2 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Meal Master is Different</h2>
                    <p className="mb-4"><span className="font-semibold text-xl">Why is Meal Master your perfect mealtime companion?</span></p>
                    <p>With cutting-edge AI technology, the app goes beyond basic recipe generation. <span className="font-semibold text-orange-500"> It learns from your inputs, preferences, and dietary needs</span> to deliver personalized recipes instantly. 
                        Plus, with Microsoft Authentication integration, <span className="font-semibold text-orange-500">your data is always secure</span>.</p>
                </div>
                <div className="gap-4 lg:w-1/2 mt-8">
                    <img className="w-[60rem] rounded-2xl" src={image} alt="office content 1" />
                </div>
            </div>
        </section>
    );
}