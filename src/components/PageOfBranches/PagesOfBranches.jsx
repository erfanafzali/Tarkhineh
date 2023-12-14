import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncFood } from "../../features/food/foodSlice";
import FoodItemSpecial from "./FoodItemSpecial";
import FoodItemFavorire from "./FoodItemFavorire";
import FoodItemNonIranian from "./FoodItemNonIranian";

function PageOfBranches() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncFood());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // اگر فقط یک بار در ابتدا نیاز به اجرا دارید

  // وابستگی به food به منظور اجرا مجدد این افکت هنگام تغییر در food

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SpecialMenu />
      <PopularMenu />
      <NonIranianMenu />
      <BranchFooter />
    </div>
  );
}

export default PageOfBranches;

function SpecialMenu() {
  const { food, loading, error } = useSelector((state) => state.food);

  return (
    <div className="w-full h-auto mt-8 sm:mt-9 md:mt-10 lg:mt-11 scroll-curser">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="w-full px-9 sm:px-10 md:px-11 lg:px-12 mb-5 sm:mb-6 md:mb-7 lg:mb-8  text-right font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          پیشنهاد ویژه
        </h2>
        <div className="w-full flex justify-center items-center ">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="w-full flex flex-nowrap px-6 justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 items-start overflow-x-scroll  hide-scrollbar scroll-smooth">
              {food.map((item) => (
                <FoodItemSpecial key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PopularMenu() {
  const { food, loading, error } = useSelector((state) => state.food);
  return (
    <div className="w-full h-auto mt-8 sm:mt-9 md:mt-10 lg:mt-11 bg-green-800 lg:py-6 md:py-4 py-4 scroll-curser">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="w-full px-9 sm:px-10 md:px-11 lg:px-12 mb-5 sm:mb-6 md:mb-7 lg:mb-8  text-right font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
          غذاهای محبوب
        </h2>
        <div className="w-full flex justify-center items-center ">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="w-full flex flex-nowrap px-6 justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 items-start overflow-x-scroll hide-scrollbar  scroll-smooth">
              {food.map((item1) => (
                <FoodItemFavorire key={item1.id} {...item1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NonIranianMenu() {
  const { food, loading, error } = useSelector((state) => state.food);
  return (
    <div className="w-full h-auto mt-8 sm:mt-9 md:mt-10 lg:mt-11 scroll-curser">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="w-full px-9 sm:px-10 md:px-11 lg:px-12 mb-5 sm:mb-6 md:mb-7 lg:mb-8  text-right font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          غذاهای غیر ایرانی
        </h2>
        <div className="w-full flex justify-center items-center ">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="w-full flex flex-nowrap px-6 justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 items-start overflow-x-scroll hide-scrollbar scroll-smooth">
              {food.map((item2) => (
                <FoodItemNonIranian key={item2.id} {...item2} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BranchFooter() {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-24 sm:mb-28  md:mb-32  lg:mb-36 ">
      <button className=" flex justify-center gap-x-2 font-semibold items-center px-6 py-2 border-2 outline-0 text-green-700 border-green-700 rounded-lg mb-12">
        <span>
          <img src="/src/assets/Icons/note.svg" alt="" />
        </span>
        <span>مشاهده منوی کامل</span>
      </button>

      <h2 className="w-full text-center text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 mt-8">
        شعبه اکباتان
      </h2>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="background-branch-footer w-full bg-cover bg-center min-h-[177px]  md:min-h-[366px] flex justify-center items-center relative">
          <div className="absolute border-[3px] border-green-800 md:-bottom-20  -bottom-10 w-[85%] md:w-[60%] bg-white rounded-lg md:min-h-[130px]  min-h-[60px]">
            <div className="w-full flex justify-center items-center py-1 md:py-2">
              <div className="w-full md:pt-3 pt-2 flex flex-col justify-center items-center gap-y-2 md:gap-y-3">
                <span>
                  <img
                    src="/src/assets/Icons/call-calling.svg"
                    alt=""
                    className="w-5 sm:w-6 md:w-7 lg:w-8"
                  />
                </span>
                <div>
                  <p className="text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                    ۰۲۱-۳۳۵۳۵۳۵۴
                  </p>
                  <p className="text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                    ۰۲۱-۳۳۵۳۵۳۵۶
                  </p>
                </div>
              </div>
              <div className="w-full md:pt-3 pt-2 text-center flex flex-col justify-center items-center gap-y-2 md:gap-y-3">
                <span>
                  <img
                    src="/src/assets/Icons/location.svg"
                    alt=""
                    className="w-5 sm:w-6 md:w-7 lg:w-8"
                  />
                </span>
                <p className="text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                  شهرک اکباتان، فاز ۳، <br /> مجتمع تجاری کوروش
                </p>
              </div>
              <div className="w-full md:pt-3 pt-2 flex flex-col justify-center items-center gap-y-2 md:gap-y-3 text-center">
                <span>
                  <img
                    src="/src/assets/Icons/clock.svg"
                    alt=""
                    className="w-5 sm:w-6 md:w-7 lg:w-8"
                  />
                </span>
                <p className="text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                  همه‌روزه از <br /> ساعت ۱۲ الی ۲۳{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
