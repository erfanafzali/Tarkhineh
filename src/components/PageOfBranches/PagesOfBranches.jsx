import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncFood } from "../../features/food/foodSlice";
import FoodItem from "./FoodItemSpecial";
import FoodItemSpecial from "./FoodItemSpecial";
import FoodItemFavorire from "./FoodItemFavorire";
import FoodItemIranian from "./FoodItemIranian";

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
      <IranianMenu />
    </div>
  );
}

export default PageOfBranches;

function SpecialMenu() {
  const { food, loading, error } = useSelector((state) => state.food);
  return (
    <div className="w-full h-auto mt-8 sm:mt-9 md:mt-10 lg:mt-11 ">
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
            <div className="w-full flex flex-nowrap px-6 justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 items-start overflow-x-scroll md:overflow-x-hidden scroll-smooth">
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
    <div className="w-full h-auto mt-8 sm:mt-9 md:mt-10 lg:mt-11 ">
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
            <div className="w-full flex flex-nowrap px-6 justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 items-start overflow-x-scroll md:overflow-x-hidden scroll-smooth">
              {food.map((item) => (
                <FoodItemFavorire key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function IranianMenu() {
  const { food, loading, error } = useSelector((state) => state.food);
  return (
    <div className="w-full h-auto mt-8 sm:mt-9 md:mt-10 lg:mt-11 ">
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
            <div className="w-full flex flex-nowrap px-6 justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 items-start overflow-x-scroll md:overflow-x-hidden scroll-smooth">
              {food.map((item) => (
                <FoodItemIranian key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
