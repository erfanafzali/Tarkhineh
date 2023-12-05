/* eslint-disable react/prop-types */
import { useState } from "react";
import HambergerMenu from "./HambergerMenu";
import Modal from "react-modal";
import Navbar from "./NavBar";
import User from "../User/User";

function Header() {
  return (
    <div className="flex justify-between items-center mt-5 sm:mt-7 md:mt-9 lg:mt-11 px-5 sm:px-7 md:px-9 lg:px-[80px] xl:px-[109px] ">
      <MenuHeader />
      <Logo />
      <NavBar />
      <Option />
    </div>
  );
}

export default Header;

function MenuHeader() {
  return (
    <div className="md:hidden">
      <HambergerMenu />
    </div>
  );
}

function Logo() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center">
        <img
          src="/src/assets/Icons/Logo.svg"
          alt=""
          className="md:w-8 lg:w-10"
        />
        <img
          src="/src/assets/Icons/Vector.svg"
          alt=""
          className="md:w-20 lg:w-24"
        />
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="flex items-center justify-between gap-x-1 sm:gap-x-2">
      <SearchIcon />
      <span className="w-full">
        <button className="bg-green-100 p-[2.2px] w-full flex justify-center items-center rounded">
          <img
            src="/src/assets/Icons/shopping-cart.svg"
            alt=""
            className="sm:w-6 md:h-6 h-7 "
          />
        </button>
      </span>
      <User />
    </div>
  );
}

function NavBar() {
  return <Navbar />;
}

function SearchIcon() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-full hidden md:flex ">
      <button className="bg-green-100 p-[2.2px] w-full flex justify-center items-center rounded">
        <img
          src="/src/assets/Icons/search-normal.svg"
          onClick={openModal}
          alt=""
          className="sm:w-6"
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="عکس مودال"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: "1000",
          },
          content: {
            top: "50%",
            left: "50%",
            // right:"",
            transform: "translate(-68%, -60%)",
            padding: "0",
            border: "0",
            maxWidth: "60%",
            maxHeight: "80%",
            width: "40%",
            height: "210px",
            zIndex: 1001,
          },
        }}>
        <div className="hidden md:flex flex-col justify-center items-center w-full font-vazir">
          <div className="w-full flex justify-between items-center md:text-xl lg:text-2xl font-bold  bg-gray-300 md:px-4 md:pr-6 lg:pr-8 lg:px-6 md:py-2 lg:py-3 ">
            <span></span>
            <span>جستجو</span>
            <span onClick={closeModal} className="cursor-pointer">
              <img src="/src/assets/Icons/search-close.svg" alt="" />
            </span>
          </div>
          <div className="w-full  py-6 flex flex-col justify-center items-center md:gap-y-6 lg:gap-y-6">
            <p className="w-full text-center md:text-sm lg:text-base">
              لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
            </p>
            <div className="w-full flex justify-center items-center relative">
              <input
                type="text"
                className="w-[70%] md:px-4 lg:px-6 md:py-1 lg:py-2 border-2 border-gray-300 rounded-md placeholder:font-semibold placeholder:text-gray-400"
                placeholder="جستجو"
              />
              <img
                src="/src/assets/Icons/search-normal.svg"
                alt=""
                className="absolute md:left-16 lg:left-28 "
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
