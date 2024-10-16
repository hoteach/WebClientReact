import image from "../assets/stock-photos/StockCake-Chef demonstrates cooking_1724920144.jpg"

export function BenefitsOfUsing() {
    return (
        <section className="bg-white dark:bg-gray-900 flex justify-center items-center flex-col">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Benefits of Using Meal Master</h2>
                    <ul className="list-disc ml-10">
                        <li className="p-2"><span className="font-semibold text-orange-500">Personalized Recipes:</span> AI understands your preferences and suggests dishes that suit your taste.</li>
                        <li className="p-2"><span className="font-semibold text-orange-500">Efficient Meal Planning:</span> Save time by having recipes tailored to what you have in your kitchen.</li>
                        <li className="p-2"><span className="font-semibold text-orange-500">Beautiful Visuals:</span> Enjoy high-quality images of your meal to make cooking more exciting and fun!</li>
                    </ul>
                </div>
                <div className="gap-4 mt-8">
                    <img className="w-[60rem] rounded-2xl" src={image} alt="office content 1" />
                </div>
            </div>
        </section>
    );
}