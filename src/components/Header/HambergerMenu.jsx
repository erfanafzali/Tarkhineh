import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Hamberger.css";
import { Menu, Transition } from "@headlessui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

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
              <BurgerMenuSide />
              <BurgerBranchSide />
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

function BurgerMenuSide() {
  return <NavMenu />;
}

function BurgerBranchSide() {
  return <NavBranch />;
}

function NavBranch() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-center flex justify-center z-50 items-center ">
      <Menu
        as="div"
        className="relative inline-block text-left w-full whitespace-normal">
        <div role="button" className="">
          <Menu.Button
            onClick={() => setOpen((open) => !open)}
            className="inline-flex w-full justify-center items-center rounded-md  px-0 text-center  md:text-xs lg:text-base xl:text-xl text-gray-600 bg-white ">
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

            {open ? (
              <ChevronUpIcon
                className="  h-0 w-0 text-gray-500"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="  h-0 w-0 text-gray-500"
                aria-hidden="true"
              />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className=" right-0 mt-2 md:w-32 lg:w-36 xl:w-44 origin-top-right divide-y divide-gray-300 px-2 rounded-md bg-white  focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-sx`}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    اکباتان
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs `}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    چالوس
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs `}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    اقدسیه
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs`}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    ونک
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function NavMenu() {
  const [open, setOpen] = useState(false);
  const chevronIcon = open ? (
    <ChevronUpIcon className="h-0 w-0 text-gray-500" aria-hidden="true" />
  ) : (
    <ChevronDownIcon className="h-0 w-0 text-gray-500" aria-hidden="true" />
  );

  return (
    <div className="w-full text-center flex justify-center z-40 items-center">
      <Menu
        as="div"
        className="relative inline-block text-left w-full whitespace-normal">
        <div role="button" className="">
          <Menu.Button
            onClick={() => setOpen(!open)}
            className="inline-flex w-full justify-center items-center rounded-md  px-0 text-center  md:text-xs lg:text-base xl:text-xl text-gray-600 bg-white ">
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

            {chevronIcon}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="  right-0 mt-2 md:w-32 lg:w-36 xl:w-44 origin-top-right divide-y divide-gray-300 px-2 rounded-md bg-white focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs`}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    غذای اصلی
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs `}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    پیش غذا
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs `}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    دسر
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-0.5 text-xs `}>
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5 hidden"
                        aria-hidden="true"
                      />
                    )}
                    نوشیدنی
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}
