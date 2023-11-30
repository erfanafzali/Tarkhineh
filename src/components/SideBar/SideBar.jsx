// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SideBar() {
  return (
    <div>
      <SideBarDescktop />
      <SideBarPhone />
    </div>
  );
}

export default SideBar;

function SideBarDescktop() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="w-full mt-5 sm:mt-7 md:mt-9 lg:mt-11 hidden md:flex">
      <div className="w-full h-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <img src="/src/assets/Images/desc1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc7.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc8.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc9.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

function SideBarPhone() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="w-full mt-5 sm:mt-7 md:mt-9 lg:mt-11 md:hidden flex flex-col justify-center items-center">
      <div className="w-full h-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <img src="/src/assets/Images/desc10.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc11.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc12.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc14.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc14.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc15.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc16.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc17.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Images/desc18.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full relative flex justify-center items-center">
        <input
          placeholder="جستجو"
          type="text"
          className="placeholder:font-vazir pr-6 sm:pr-2 mt-6 sm:mt-7 px-2 sm:px-4 py-1 sm:py-1.5 border-2 w-[80%] sm:w-[85%] border-gray-400 rounded outline-0"
        />
        <button className="absolute left-16 sm:left-20">
          <img
            src="/src/assets/Icons/search-normal.svg"
            alt=""
            className="sm:w-6 mt-6 sm:mt-7"
          />
        </button>
      </div>
    </div>
  );
}
