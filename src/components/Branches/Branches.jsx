function Branches() {
  return (
    <div className="w-full my-10 sm:my-12 md:my-14 lg:my-16 pb-12 h-full">
      <div className="w-full flex-col flex justify-center items-center h-full">
        <h1 className="pb-3 sm:pb-4 md:pb-6 lg:pb-7 font-bold text-base  sm:text-lg md:text-xl lg:text-2xl                        ">
          ترخینه گردی
        </h1>
        <div className="gap-y-4 sm:gap-y-5  md:gap-x-4 lg:gap-x-6  w-full flex md:flex-row  flex-col justify-center items-center px-6 sm:px-8 md:px-10 lg:px-12 ">
          <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400 h-full  w-full flex md:flex-col  justify-center items-center ">
            <img
              src="/src/assets/Images/acbatanp.jfif"
              alt=""
              className="w-[45%] md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[150px] lg:min-h-[250px] xl:min-h-[230px]"
            />
            <div className="w-[65%] md:w-[100%] md:h-[30%] flex flex-col justify-center items-center">
              <h2 className="font-bold pt-3 text-gray-700 py-2  text-sm sm:text-base md:text-lg ">
                شعبه اکباتان
              </h2>
              <p className="font-semibold text-gray-500 text-xs sm:text-sm text-center">
                شهرک اکباتان، فاز ۳، <br/> مجتمع تجاری کوروش، طبقه سوم
              </p>
            </div>
          </div>
          <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center ">
            <img
              src="/src/assets/Images/chalosp.jfif"
              alt=""
              className="w-[45%] md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[130px] lg:min-h-[230px] xl:min-h-[230px]"
            />
            <div className="w-[65%] flex flex-col justify-center items-center">
              <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg">
                شعبه چالوس
              </h2>
              <p className="font-semibold text-gray-500 text-xs sm:text-sm  text-center ">
              چالوس، خیابان ۱۷ شهریور، <br/> بعد کوچه کوروش،  
               </p>
            </div>
          </div>
          <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center">
            <img
              src="/src/assets/Images/aghdesiep.jfif"
              alt=""
              className="w-[45%] md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[150px] lg:min-h-[230px]"
            />
            <div className="w-[65%] flex flex-col justify-center items-center">
              <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg ">
                شعبه اقدسیه
              </h2>
              <p className="font-semibold text-gray-500 text-xs sm:text-sm text-center ">
                خیابان اقدسیه ، <br/> نرسیده به میدان خیام، پلاک ۸
              </p>
            </div>
          </div>
          <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center ">
            <img
              src="/src/assets/Images/vanakp.png"
              alt=""
              className="w-[45%] md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[50px] md:max-h-max md:min-h-[150px] lg:min-h-[230px] lg:h-[100px]"
            />
            <div className="w-[65%] flex flex-col justify-center items-center">
              <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg ">
                شعبه ونک
              </h2>
              <p className="font-semibold text-gray-500 text-xs sm:text-sm  text-center ">
                میدان ونک،  <br/> خیابان فردوسی، پلاک ۲۶
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branches;
