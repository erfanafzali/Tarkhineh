/* eslint-disable react/prop-types */
import { HeartIcon } from "@heroicons/react/24/outline";
const FoodItemSpecial = ({ id, title, stare, price, discount, point, img }) => {
  // اگر می‌خواهید اقلامی با id کمتر از 5 نمایش داده شوند
  if (id <= 5) {
    return (
      <div className="w-full flex justify-center items-start  mb-10 sm:mb-12 md:mb-14 lg:mb-16 rounded-lg border-2 ">
        <div className="w-full flex flex-col justify-center items-start flex-nowrap h-auto gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-7">
          <div className="w-full h-auto">
            <img
              src={img}
              alt=""
              className="w-full min-w-[168px] md:min-w-[288px] min-h-[109px] md:min-h-[256px] bg-cover"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="w-full font-bold text-center text-base sm:text-lg md:text-xl xl:text-2xl">
              {title}
            </h2>

            <div className="w-full flex flex-col justify-center items-center ">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center items-center gap-x-5 sm:gap-x-6 md:gap-x-7 py-1   lg:px-5 md:px-4 sm:px-3 px-2 lg:mt-4 md:mt-3 sm:mt-2 mt-1">
                  <div className="w-full flex justify-center items-center  gap-x-1  text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]  text-gray-400  whitespace-nowrap ">
                    <span className="w-full">
                      <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4  md:w-5  md:h-5   lg:w-6    lg:h-6    text-gray-400" />
                    </span>
                    <span className="w-full">افزودن به علاقمندی‌ها</span>
                  </div>
                  <div className="w-full flex justify-end items-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-400">
                    <span className="bg-red-100 text-red-600 font-semibold px-1 md:px-2 py-0.5 md:py-1 rounded-xl text-center  pt-1 ">{discount}</span>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center px-2 sm:px-4 md:px-5 lg:px-6    text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]  text-gray-400  whitespace-nowrap">
                  <div>
                    <span className="text-black pl-1 font-bold md:pl-2">⭐{stare}</span>
                    <span>({point})</span>
                  </div>
                  <div className="text-black  text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                    <span>{price}</span>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  lg:mt-4 md:mt-3 sm:mt-2 mt-1 flex justify-center items-center lg:py-6 md:py-4 sm:py-2 py-2 ">
              <button className="w-[90%] bg-green-700 rounded-lg   py-1.5 md:py-2.5 lg:py-4 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // اگر نمی‌خواهید چیزی نمایش داده شود
  return null;
};

export default FoodItemSpecial;
