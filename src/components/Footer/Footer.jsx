function Footer() {
  return (
    <div className="background-footer  bg-cover bg-center  w-full flex items-center justify-center h-[202px] md:h-[340px]">
      <div className="w-full md:w-[50%] flex justify-around text-white items-start ">
        <div>
          <h1 className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-start text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            دسترسی آسان
          </h1>
          <ul className="w-full flex flex-col gap-y-1 text-sm sm:text-base md:text-lg lg:text-xl sm:gap-y-1.5 md:gap-y-2 lg:gap-y-2.5 justify-center items-start pr-2 sm:pr-3 md:pr-4 lg:pr-5">
            <li>پرسش‌های متداول</li>
            <li>قوانین ترخینه</li>
            <li>حریم خصوصی</li>
            <li className="w-full flex justify-start items-center gap-x-1.5">
              <span>
                <img
                  src="/src/assets/Icons/twitter.svg"
                  alt=""
                  className="w-6 sm:w-6 md:w-7 lg:w-8"
                />
              </span>
              <span>
                <img
                  src="/src/assets/Icons/instagram.svg"
                  alt=""
                  className="w-6 sm:w-6 md:w-7 lg:w-8"
                />
              </span>
              <span>
                <img
                  src="/src/assets/Icons/telegram.svg"
                  alt=""
                  className="w-6 sm:w-6 md:w-7 lg:w-8"
                />
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-start text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            شعبه‌های ترخینه
          </h1>
          <ul className="w-full flex flex-col gap-y-1 text-sm sm:text-base md:text-lg lg:text-xl sm:gap-y-1.5 md:gap-y-2 lg:gap-y-2.5 justify-center items-start pr-2 sm:pr-3 md:pr-4 lg:pr-5">
            <li>شعبه اکباتان</li>
            <li>شعبه چالوس</li>
            <li>شعبه اقدسیه</li>
            <li>شعبه ونک</li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center w-[50%]">
        <div className="w-full flex justify-center items-start text-white md:px-6 lg:px-10 xl:px-16">
          <div className="w-[50%] flex flex-col justify-start items-center md:pl-8 lg:pl-10">
            <h2 className="w-full mb-3 md:mb-5 lg:mb-6  md:text-xl lg:text-2xl font-bold">
              پیام به ترخینه
            </h2>
            <div className="w-full flex flex-col justify-center items-center gap-y-2.5">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="form-control border-2 border-gray-400 w-full py-2 md:px-2 lg:px-3 rounded-md placeholder:text-white placeholder:md:text-sm placeholder:lg:text-base"
              />
              <input
                type="number"
                placeholder="شماره تماس"
                className="form-control border-2 border-gray-400 w-full py-2 md:px-2 lg:px-3 rounded-md placeholder:text-white placeholder:md:text-sm placeholder:lg:text-base"
              />
              <input
                type="email"
                placeholder="آدرس ایمیل (اختیاری)"
                className="form-control border-2 border-gray-400 w-full py-2 md:px-2 lg:px-3 rounded-md placeholder:text-white placeholder:md:text-sm placeholder:lg:text-base"
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-end ">
            <textarea
              className="form-control resize-none border-2 pt-2 px-2 pb-1 border-gray-400 w-full md:mt-12 lg:mt-14 rounded-md placeholder:text-white placeholder:md:text-sm placeholder:lg:text-base"
              name=""
              placeholder="پیام شما"
              id=""
              cols=""
              rows="6"></textarea>
            <p className="py-0.5 w-full text-end">0/200</p>
            <button className="form-control border-2 rounded-md border-gray-400   md:py-2 md:px-10 lg:py-2.5 lg:px-16">ارسال پیام</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
