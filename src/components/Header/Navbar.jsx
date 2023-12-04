import { Menu, Transition } from "@headlessui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
function Navbar() {
  return (
    <div className="hidden md:flex justify-center items-center md:px-2">
      <ul className="w-full flex justify-center items-center font-bold md:text-xs lg:text-base xl:text-xl xl:gap-x-8 lg:gap-x-6  md:gap-x-4 text-gray-500">
        <li className=" flex">
          <Home />
        </li>
        <li className="z-50">
          <BranchNavbar />
        </li>
        <li>منو</li>
        <li>اعطای نمایندگی</li>
        <li>درباره ی ما</li>
        <li>تماس با ما</li>
      </ul>
    </div>
  );
}

export default Navbar;

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-center hidden md:flex justify-center z-50 items-center ">
      <Menu
        as="div"
        className="relative inline-block text-left w-full whitespace-normal">
        <div className="font-bold">
          <Menu.Button
            onClick={() => setOpen((open) => !open)}
            className="inline-flex w-full justify-center items-center rounded-md  px-0 text-center pr-2 py-2 md:text-xs lg:text-base xl:text-xl text-gray-500 bg-white font-bold">
            صفحه ی اصلی
            {open ? (
              <ChevronUpIcon
                className="  h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="  h-5 w-5 text-gray-500"
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
          <Menu.Items className="absolute right-0 mt-2 md:w-32 lg:w-36 xl:w-44 origin-top-right divide-y divide-gray-300 px-2 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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

function BranchNavbar() {
  const [open, setOpen] = useState(false);
  const chevronIcon = open ? (
    <ChevronUpIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
  ) : (
    <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
  );

  return (
    <div className="w-full text-center hidden md:flex justify-center z-40 items-center">
      <Menu
        as="div"
        className="relative inline-block text-left w-full whitespace-normal">
        <div className="font-bold">
          <Menu.Button
            onClick={() => setOpen(!open)}
            className="inline-flex w-full justify-center items-center rounded-md  px-0 text-center pr-2 py-2 md:text-xs lg:text-base xl:text-xl text-gray-500 bg-white font-bold">
            شعبه
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
          <Menu.Items className="absolute right-0 mt-2 md:w-32 lg:w-36 xl:w-44 origin-top-right divide-y divide-gray-300 px-2 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
                      active ? "bg-violet-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm lg:text-base `}>
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
