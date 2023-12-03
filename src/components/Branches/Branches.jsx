/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "react-modal";

function Branches() {
  const [isMobile, setIsMobile] = useState(false);
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);







  const openModal1 = () => {
    setModal1IsOpen(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
  };

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  const openModal3 = () => {
    setModal3IsOpen(true);
  };

  const closeModal3 = () => {
    setModal3IsOpen(false);
  };

  const openModal4 = () => {
    setModal4IsOpen(true);
  };

  const closeModal4 = () => {
    setModal4IsOpen(false);
  };

  return (
    <div className="w-full my-10 sm:my-12 md:my-14 lg:my-16 pb-12 h-full">
      <div className="w-full flex-col flex justify-center items-center h-full">
        <h1 className="pb-3 sm:pb-4 md:pb-6 lg:pb-7 font-bold text-base  sm:text-lg md:text-xl lg:text-2xl">
          ترخینه گردی
        </h1>
        <div className="gap-y-4 sm:gap-y-5  md:gap-x-4 lg:gap-x-6  w-full flex md:flex-row  flex-col justify-center items-center px-6 sm:px-8 md:px-10 lg:px-12 ">
          <AcbatanImg
            modalIsOpen={modal1IsOpen}
            closeModal={closeModal1}
            openModal={openModal1}
            isMobile={isMobile}
          />
          <ChaloosImg
            modalIsOpen={modal2IsOpen}
            closeModal={closeModal2}
            openModal={openModal2}
            isMobile={isMobile}
          />
          <AghdasiehImg
            modalIsOpen={modal3IsOpen}
            closeModal={closeModal3}
            openModal={openModal3}
            isMobile={isMobile}
          />
          <VanakImg
            modalIsOpen={modal4IsOpen}
            closeModal={closeModal4}
            openModal={openModal4}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}

export default Branches;

function AcbatanImg({ modalIsOpen, closeModal, openModal, isMobile }) {
  if (isMobile) {
    return (
      <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400 h-full  w-full flex md:flex-col  justify-center items-center ">
        <img
          src="/src/assets/Images/acbatanp.jfif"
          alt="عکس مودال"
          onClick={openModal}
          className="w-[45%] cursor-pointer md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[150px] lg:min-h-[250px] xl:min-h-[230px]"
        />

        <div className="w-[65%] md:w-[100%] md:h-[30%] flex flex-col justify-center items-center">
          <h2 className="font-bold pt-3 text-gray-700 py-2  text-sm sm:text-base md:text-lg ">
            شعبه اکباتان
          </h2>
          <p className="font-semibold text-gray-500 text-xs sm:text-sm text-center">
            شهرک اکباتان، فاز ۳، <br /> مجتمع تجاری کوروش، طبقه سوم
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400 h-full  w-full flex md:flex-col  justify-center items-center ">
      <img
        src="/src/assets/Images/acbatanp.jfif"
        alt="عکس مودال"
        onClick={openModal}
        className="w-[45%] cursor-pointer md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[150px] lg:min-h-[250px] xl:min-h-[230px]"
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="عکس مودال"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "0",
            maxWidth: "80%",
            maxHeight: "80%",
          },
        }}>
        <img
          src="/src/assets/Images/acbatanp.jfif"
          alt="عکس مودال"
          className="w-full h-full object-cover"
        />
        {/* <button onClick={closeModal}>بستن</button> */}
      </Modal>
      <div className="w-[65%] md:w-[100%] md:h-[30%] flex flex-col justify-center items-center">
        <h2 className="font-bold pt-3 text-gray-700 py-2  text-sm sm:text-base md:text-lg ">
          شعبه اکباتان
        </h2>
        <p className="font-semibold text-gray-500 text-xs sm:text-sm text-center">
          شهرک اکباتان، فاز ۳، <br /> مجتمع تجاری کوروش، طبقه سوم
        </p>
      </div>
    </div>
  );
}

function ChaloosImg({ modalIsOpen, closeModal, openModal, isMobile }) {
  // اگر در حالت موبایل هستید، مودال را نمایش ندهید
  if (isMobile) {
    return (
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
            چالوس، خیابان ۱۷ شهریور، <br /> بعد کوچه کوروش،
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center ">
      <img
        src="/src/assets/Images/chalosp.jfif"
        alt=""
        onClick={openModal}
        className="w-[45%] cursor-pointer md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[130px] lg:min-h-[230px] xl:min-h-[230px]"
      />
      <Modal
        className=""
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="عکس  مودال 2"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "0",
            maxWidth: "80%", // تنظیم عرض حداکثری
            maxHeight: "80%", // تنظیم ارتفاع حداکثری
          },
        }}>
        <img
          src="/src/assets/Images/chalosp.jfif"
          alt="عکس  مودال2"
          className="w-full h-full object-cover"
        />

        {/* <button onClick={closeModal}>بستن</button> */}
      </Modal>
      <div className="w-[65%] flex flex-col justify-center items-center">
        <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg">
          شعبه چالوس
        </h2>
        <p className="font-semibold text-gray-500 text-xs sm:text-sm  text-center ">
          چالوس، خیابان ۱۷ شهریور، <br /> بعد کوچه کوروش،
        </p>
      </div>
    </div>
  );
}

function AghdasiehImg({ modalIsOpen, closeModal, openModal, isMobile }) {
  // اگر در حالت موبایل هستید، مودال را نمایش ندهید
  if (isMobile) {
    return (
      <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center">
        <img
          src="/src/assets/Images/aghdesiep.jfif"
          alt=""
          className="w-[45%] md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[150px] lg:min-h-[230px]"
        />
        <Modal
          className=""
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="عکس مودال"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "0",
              border: "0",
              maxWidth: "80%", // تنظیم عرض حداکثری
              maxHeight: "80%", // تنظیم ارتفاع حداکثری
            },
          }}>
          <img
            src="/src/assets/Images/acbatand.jfif"
            alt="عکس مودال"
            className="w-full h-full object-cover"
          />

          <button onClick={closeModal}>بستن</button>
        </Modal>
        <div className="w-[65%] flex flex-col justify-center items-center">
          <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg ">
            شعبه اقدسیه
          </h2>
          <p className="font-semibold text-gray-500 text-xs sm:text-sm text-center ">
            خیابان اقدسیه ، <br /> نرسیده به میدان خیام، پلاک ۸
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center">
      <img
        src="/src/assets/Images/aghdesiep.jfif"
        alt=""
        onClick={openModal}
        className="w-[45%] cursor-pointer md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[70%] md:max-h-max md:min-h-[150px] lg:min-h-[230px]"
      />
      <Modal
        className=""
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="عکس  مودال 2"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "0",
            maxWidth: "80%", // تنظیم عرض حداکثری
            maxHeight: "80%", // تنظیم ارتفاع حداکثری
          },
        }}>
        <img
          src="/src/assets/Images/aghdesiep.jfif"
          alt="عکس  مودال2"
          className="w-full h-full object-cover"
        />

        {/* <button onClick={closeModal}>بستن</button> */}
      </Modal>
      <div className="w-[65%] flex flex-col justify-center items-center">
        <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg ">
          شعبه اقدسیه
        </h2>
        <p className="font-semibold text-gray-500 text-xs sm:text-sm text-center ">
          خیابان اقدسیه ، <br /> نرسیده به میدان خیام، پلاک ۸
        </p>
      </div>
    </div>
  );
}

function VanakImg({ modalIsOpen, closeModal, openModal, isMobile }) {
  // اگر در حالت موبایل هستید، مودال را نمایش ندهید
  if (isMobile) {
    return (
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
            میدان ونک، <br /> خیابان فردوسی، پلاک ۲۶
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" border-2 md:pb-2 lg:pb-4 rounded-md gap-x-2 sm:gap-x-3 md:gap-x-0 border-gray-400  w-full flex md:flex-col  justify-center items-center ">
      <img
        src="/src/assets/Images/vanakp.png"
        alt=""
        onClick={openModal}
        className="w-[45%] cursor-pointer md:w-[100%] object-cover max-h-[80px] sm:max-h-[120px] md:h-[50px] md:max-h-max md:min-h-[150px] lg:min-h-[230px] lg:h-[100px]"
      />
      <Modal
        className=""
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="عکس مودال"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "0",
            maxWidth: "80%", // تنظیم عرض حداکثری
            maxHeight: "80%", // تنظیم ارتفاع حداکثری
          },
        }}>
        <img
          src="/src/assets/Images/vanakp.png"
          alt="عکس مودال"
          className="w-full h-full object-cover"
        />

        {/* <button onClick={closeModal}>بستن</button> */}
      </Modal>
      <div className="w-[65%] flex flex-col justify-center items-center">
        <h2 className="font-bold text-gray-700 py-2 text-sm sm:text-base md:text-lg ">
          شعبه ونک
        </h2>
        <p className="font-semibold text-gray-500 text-xs sm:text-sm  text-center ">
          میدان ونک، <br /> خیابان فردوسی، پلاک ۲۶
        </p>
      </div>
    </div>
  );
}
