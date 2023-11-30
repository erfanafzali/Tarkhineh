function Menu() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-8 sm:mt-9 md:mt-12 lg:mt-14 px-8 sm:px-10 md:px-12 lg:px-14 pb-20 whitespace-nowrap">
      <h2 className="mb-8 sm:mb-9 lg:mb-10 xl:mb-11 w-full text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ">
        منوی رستوران
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:justify-between  w-full justify-center items-center gap-x-5 sm:gap-x-7 md:gap-x-14 gap-y-8 sm:gap-y-10">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="relative">
            <img
              src="/src/assets/Images/1b.png"
              alt=""
              className="z-30 relative hidden md:flex"
            />
            <img
              src="/src/assets/Images/2.png"
              alt=""
              className="z-30 relative md:hidden flex"
            />
            <div className="bg-green-700 z-10 absolute xl:w-[300px] xl:h-[160px] lg:w-[240px] lg:h-[120px] w-[150px] h-[80px]  md:w-[180px] md:h-[100px] lg:top-24 lg:-left-7 xl:top-32 xl:-left-5 md:top-18 md:-left-6 top-16 -left-2 rounded-md"></div>
          </div>
          <button className="z-20 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 lg:py-3 font-semibold text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl rounded-md  shadow-black bg-white">
            غذای اصلی
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="relative">
            <img
              src="/src/assets/Images/2b.png"
              alt=""
              className="z-30 relative hidden md:flex"
            />
            <img
              src="/src/assets/Images/1.png"
              alt=""
              className="z-30 relative md:hidden flex"
            />
            <div className="bg-green-700 z-10 absolute xl:w-[300px] xl:h-[160px] lg:w-[240px] lg:h-[120px] w-[150px] h-[80px]  md:w-[180px] md:h-[100px] lg:top-24 lg:-left-7 xl:top-32 xl:-left-5 md:top-18 md:-left-6 top-16 -left-2 rounded-md"></div>
          </div>
          <button className="z-20 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 lg:py-3 font-semibold text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl rounded-md  shadow-black bg-white">
            پیش غذا
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="relative">
            <img
              src="/src/assets/Images/3b.png"
              alt=""
              className="z-30 relative hidden md:flex"
            />
            <img
              src="/src/assets/Images/1.png"
              alt=""
              className="z-30 relative md:hidden flex"
            />
            <div className="bg-green-700 z-10 absolute xl:w-[300px] xl:h-[160px] lg:w-[240px] lg:h-[120px] w-[150px] h-[80px]  md:w-[180px] md:h-[100px] lg:top-24 lg:-left-7 xl:top-32 xl:-left-5 md:top-18 md:-left-6 top-16 -left-2 rounded-md"></div>
          </div>
          <button className="z-20 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 lg:py-3 font-semibold text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl rounded-md  shadow-black bg-white">
             دسر
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="relative">
            <img
              src="/src/assets/Images/2b.png"
              alt=""
              className="z-30 relative hidden md:flex"
            />
            <img
              src="/src/assets/Images/4.png"
              alt=""
              className="z-30 relative md:hidden flex"
            />
            <div className="bg-green-700 z-10 absolute xl:w-[300px] xl:h-[160px] lg:w-[240px] lg:h-[120px] w-[150px] h-[80px]  md:w-[180px] md:h-[100px] lg:top-24 lg:-left-7 xl:top-32 xl:-left-5 md:top-18 md:-left-6 top-16 -left-2 rounded-md"></div>
          </div>
          <button className="z-20 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 lg:py-3 font-semibold text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl rounded-md  shadow-black bg-white">
          پیش غذا
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
