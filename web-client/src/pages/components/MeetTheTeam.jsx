
import image from "../assets/stock-photos/StockCake-Joyful Cooking Experience_1724920155.jpg"

export function MeetTheTeam() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 flex flex-col-reverse lg:flex-row-reverse sm:py-16 lg:px-6">
                <img className="lg:w-1/2 dark:hidden rounded-2xl" src={image} alt="dashboard image" />
                <div className="mt-4 lg:w-1/2 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet the Team Behind Meal Master!</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Our team of passionate developers and <span className="font-semibold text-orange-500">culinary experts</span> created Meal Master 
                        to <span className="font-semibold text-orange-500">simplify your kitchen experience</span>. With advanced AI and image generation, we provide you with <span className="font-semibold text-orange-500">meal solutions tailored just for you</span>. 
                        Whether you're a busy mom, fitness enthusiast, or student, <span className="font-semibold text-orange-500">Meal Master is here to make cooking effortless and fun</span>!
                    </p>
                </div>
            </div>
        </section>
    );
}