import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { EffectCoverflow, Pagination } from "swiper/modules";

// استایل‌های Scoped CSS برای Swiper

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px; /* Default width for mobile */
  border: 3px solid gray;
  border-radius: 10px;

  @media (min-width: 768px) {
    /* Adjust the width for desktop screens */
    width: 600px;
    height: 300px;

    img {
      width: 15%; /* Change the width of the image */
      max-width: 100%; /* Ensure the image does not exceed its container's width */
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%; /* Add rounded corners */
    }
  }

  div {
    padding: 7px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  img {
    width: 20%; /* Change the width of the image */
    max-width: 100%; /* Ensure the image does not exceed its container's width */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; /* Add rounded corners */
  }

  h3 {
    padding-top: 10px;
    color: gray;
  }
  h4 {
    padding-bottom: 30px;
    padding-top: 5px;
    color: gray;
  }

  p {
    width: 100%;
    text-align: center;
  }
`;

export default function Comments() {
  return (
    <div className="w-full mt-28">
      <StyledSwiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <div className="w-full justify-center items-center text-justify">
            <img
              src="/src/assets/Images/person1.svg"
              alt=""
              className="rounded-full "
            />
            <h3 className="text-xs">آرزو محمدعلیزاده</h3>
            <h4 className="text-xs">۲۳ اسفند ۱۴۰۱</h4>
            <p className="text-xs">
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>
          </div>
        </StyledSwiperSlide>
      </StyledSwiper>
    </div>
  );
}
