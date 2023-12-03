import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Hamberger.css";

function HambergerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`z-50 burger-menu w-full ${isOpen ? "backdrop" : ""}`}>
      <button className=" md:hidden" onClick={handleToggle}>
        <img src="/src/assets/Icons/menu.svg" alt="menu" className=" sm:w-10" />
      </button>

      <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
        <div className="menu flex flex-col justify-start items-center ">
          <div className="background-burger-menu w-full h-[100px] bg-cover bg-center flex justify-between items-start px-4 sm:px-6">
            <div className="pt-8 sm:pt-10">
              <img src="/src/assets/Icons/Icon-burger.svg" alt="" />
            </div>
            <button className="pt-2 sm:pt-3" onClick={handleClose}>
              <img src="/src/assets/Icons/burger-close.svg" alt="" />
            </button>
          </div>
          <div className="w-full flex justify-center items-start pt-4">
            <ul className="w-full flex flex-col justify-start items-center gap-y-2 sm:gap-y-1.5 px-4 sm:px-5 text-xs sm:text-sm text-gray-800">
              <li className="w-full border-b border-gray-400 flex justify-start items-center pb-1 sm:pb-2 text-green-700 gap-x-1 sm:gap-x-2">
                <span>
                  <img src="/src/assets/Icons/home.svg" alt="" />
                </span>
                <span>صفحه اصلی</span>
              </li>
              <li className="w-full border-b border-gray-400 flex justify-between items-cente pb-1 sm:pb-2">
                <div className="w-full flex justify-start items-center gap-x-1 sm:gap-x-2">
                  <span>
                    <img src="/src/assets/Icons/menu-board2.svg" alt="" />
                  </span>
                  <span>منو</span>
                </div>
                <span>
                  <img src="/src/assets/Icons/arrow bot.svg" alt="" />
                </span>
              </li>
              <li className="w-full border-b border-gray-400 flex justify-between items-cente pb-1 sm:pb-2">
                <div className="w-full flex justify-start items-center gap-x-1 sm:gap-x-2">
                  <span>
                    <img src="/src/assets/Icons/shoebeh.svg" alt="" />
                  </span>
                  <span>شعبه</span>
                </div>
                <span>
                  <img src="/src/assets/Icons/arrow bot.svg" alt="" />
                </span>
              </li>
              <li className="w-full border-b border-gray-400 flex justify-start items-center pb-1 sm:pb-2 gap-x-1 sm:gap-x-2">
                <span>
                  <img src="/src/assets/Icons/profile-2user.svg" alt="" />
                </span>
                <span>درباره ما</span>
              </li>
              <li className="w-full flex justify-start items-center pb-1 sm:pb-2 gap-x-1 sm:gap-x-2">
                <span>
                  <img src="/src/assets/Icons/call-calling.svg" alt="" />
                </span>
                <span>تماس با ما</span>
              </li>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default HambergerMenu;
