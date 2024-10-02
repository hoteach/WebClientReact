export default function Funnel(){
    return(
        <div className="container mx-auto p-5">
      {/* Profile Section */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Кой съм аз и защо да ми вярвате?</h2>
        <p className="text-gray-600 mb-4">
          Аз съм програмист с <strong>над 6 години опит</strong> в разработката на иновативни софтуерни решения, специализиран в уеб приложения и <strong>.NET технологии</strong>.
        </p>
        <img src="profile-image.png" alt="Profile" className="rounded-full w-24 h-24 mb-4 mx-auto"/>
        <p className="text-center font-semibold">Николай К.</p>
        <div className="flex justify-center mt-2">
          <span className="text-yellow-400">★★★★★</span>
        </div>
      </section>

      {/* Content Section */}
      <section className="mt-8 bg-gray-50 p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Над 200 материали:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>100 идеи</strong> за успешен проект</li>
          <li><strong>67 упражнения</strong>, 48 шаблона</li>
          <li>Стъпка по стъпка карта</li>
          <li>Дизайн във Figma</li>
        </ul>
        <p className="mt-4 text-xl text-red-500 font-bold">СЕГА САМО 8,90 ЛВ.</p>
      </section>

      {/* Order Summary */}
      <section className="mt-8 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Order Summary</h3>
        <p className="mb-2">Наръчник на забавлението за родители с деца</p>
        <p className="text-lg text-gray-700 mb-2">Total: 24.90 ЛВ.</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">
          ПОРЪЧАЙ СЕГА
        </button>
      </section>

      {/* Form Section */}
      <section className="mt-8 bg-gray-50 p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Вашите детайли за доставка:</h3>
        <form className="space-y-4">
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Full Name"/>
          <input type="email" className="w-full p-2 border rounded-md" placeholder="Email Address"/>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Phone Number"/>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="City"/>
          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md">
            Потвърди
          </button>
        </form>
      </section>
    </div>
    )
}