import image from "../assets/stock-photos/StockCake-Joyful Cooking Time_1724920602.jpg";
import image2 from "../assets/stock-photos/Post-Feast Melancholy.jpg";

export function DiscoverWithMealMaster() {
  function App() {
    return window.open("https://app.mealmasterbot.com");
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center flex-col">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Here’s What You’ll Discover with Meal Master:
            </h2>
            <ul className="list-disc ml-10">
              <li className="p-2">
                How Meal Master, the AI Cooking Assistant,{" "}
                <span className="font-semibold text-orange-500">
                  Understands Your Needs and Preferences.
                </span>
              </li>
              <li className="p-2">
                The{" "}
                <span className="font-semibold text-orange-500">
                  Advanced Image Generation Algorithms
                </span>{" "}
                for Realistic and Delicious Meal Visuals.
              </li>
              <li className="p-2">
                Ways to Use the App to{" "}
                <span className="font-semibold text-orange-500">
                  Save Time, Reduce Stress,
                </span>{" "}
                and Enhance Meal Planning.
              </li>
              <li className="p-2">
                Easy Steps to Getting Started and Setting Up Your Account with
                Microsoft Authentication.
              </li>
              <li className="p-2">
                Creative Ideas for{" "}
                <span className="font-semibold text-orange-500">
                  Exploring New Recipes
                </span>{" "}
                and Maximizing Your Culinary Options.
              </li>
            </ul>
          </div>
          <div className="gap-4 mt-8">
            <img
              className="w-[60rem] rounded-2xl"
              src={image}
              alt="office content 1"
            />
          </div>
        </div>
        <a
          onClick={App}
          className="inline-block cursor-pointer rounded-lg bg-orange-400 px-6 py-3.5 text-center font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Try Meal Master for Free
        </a>
      </section>
      <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-2 lg:mb-2 mt-8 lg:mt-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
          Tired of the daily struggle of meal planning?
        </h2>
        <p className="text-lg">
          Whether you're managing food allergies, intolerances, or specific
          dietary needs, our cooking bot is here to simplify your kitchen
          adventures.
        </p>
      </div>
      <div className="static md:relative max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col mb-8 lg:mb-8 mt-8 lg:mt-8">
        <img
          src={image2}
          alt="office content 1"
          className="hidden md:block w-full h-auto rounded-2xl object-cover"
        />
        <div className="static md:absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 rounded-2xl">
          <p className="text-lg mt-5">
            In Europe,{" "}
            <span className="font-semibold text-orange-400">
              25 million people
            </span>{" "}
            face food allergies and varying rates of lactose intolerance. For
            those with chronic conditions like diabetes or heart disease, or
            those committed to vegan or keto diets, planning meals can be a
            daunting task.
          </p>
          <p className="text-lg mt-5">
            Our bot is{" "}
            <span className="font-semibold text-orange-400">
              designed to cater to all these needs
            </span>
            . It provides personalized recipes based on your health
            requirements, available ingredients, and time constraints. By making
            meal planning easier and more efficient, it helps{" "}
            <span className="font-semibold text-orange-400">
              you reduce food waste by at least 40%
            </span>
            .
          </p>
        </div>
      </div>
      <div className="max-w-screen-md px-4 lg:px-0 flex justify-center items-center flex-col">
        <p className="text-lg mt-5">
          Transform your meal planning from a daily chore into a streamlined,
          enjoyable experience.{" "}
          <a
            className="font-semibold text-orange-400 underline"
            href="https://app.mealmasterbot.com"
          >
            Join our community
          </a>{" "}
          and let our cooking bot turn your kitchen into a hub of healthy,
          sustainable, and delicious meals.
        </p>
      </div>
    </div>
  );
}
