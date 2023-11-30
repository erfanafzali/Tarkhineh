function Introduction() {
  return (
    <div className=" background bg-cover bg-center  w-full flex items-center justify-center h-[400px] md:h-[390px]">
      <div className=" w-full h-full flex flex-col md:flex-row justify-center items-center ">
        <div className="text-white w-full px-10 sm:px-12 md:px-14 lg:px-16 xl:px-18 py-5 sm:py-6 md:py-7 lg:py-8 flex justify-center flex-col items-center">
          <h2 className="font-bold mb-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full text-right">
            رستوران‌های زنجیره‌ای ترخینه
          </h2>
          <p className="text-justify mb-5 md:mb-8 w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="w-full flex justify-end">
            <button className="flex justify-center items-center border px-9 sm:px-11 md:px-14 lg:px-16 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded">
              <span className="pl-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                اطلاعات بیشتر
              </span>
              <span>
                <img
                  src="/src/assets/Icons/arrow-left.svg"
                  alt=""
                  className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 justify-center items-center text-white">
          <div className="w-full flex flex-col justify-center items-center">
            <span className="md:mb-4">
              <img
                src="/src/assets/Icons/person.svg"
                alt=""
                className="w-8 sm:w-8 md:w-10 lg:w-12"
              />
            </span>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              پرسنلی مجرب و حرفه‌ای
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="md:mb-4">
              <img
                src="/src/assets/Icons/diagram.svg"
                alt=""
                className="w-8 sm:w-8 md:w-10 lg:w-12"
              />
            </span>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              کیفیت بالای غذاها
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="md:mb-4">
              <img
                src="/src/assets/Icons/home-wifi.svg"
                alt=""
                className="w-8 sm:w-8 md:w-10 lg:w-12"
              />
            </span>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              محیطی دلنشین و آرام
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="md:mb-4">
              <img
                src="/src/assets/Icons/menu-board.svg"
                alt=""
                className="w-8 sm:w-8 md:w-10 lg:w-12"
              />
            </span>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              منوی متنوع
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
