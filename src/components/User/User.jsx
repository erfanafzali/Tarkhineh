import { Menu, Transition } from "@headlessui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

function User() {
  return (
    <div className="w-full flex justify-center items-center z-50 mt-1">
      <button className=" w-full flex justify-center items-center rounded">
        <span className="w-full pr-[2px]">
          <MyUser />
          {/* <img src="/src/assets/Icons/user.svg" alt="" className="sm:w-5" /> */}
        </span>
      </button>
    </div>
  );
}

export default User;

function MyUser() {
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
        <div className="font-bold">
          <Menu.Button
            onClick={() => setOpen(!open)}
            className="inline-flex w-full justify-center items-center rounded-md   text-center px-1 py-0.5 md:text-xs lg:text-base xl:text-xl text-green-900 bg-green-100 font-bold">
            <img
              src="/src/assets/Icons/user.svg"
              alt=""
              className="sm:w-6 h-6"
            />
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
          <Menu.Items className="absolute -right-40 sm:-right-36 md:-right-32 lg:-right-20 mt-2 w-48 sm:w-44 md:w-44 lg:w-44 xl:w-48 origin-top-right divide-y divide-gray-300 px-2 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`gap-x-1 ${
                      active ? "bg-green-500 text-white" : "text-gray-700"
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
                    <span>
                      <img src="/src/assets/Icons/user22.svg" alt="" />
                    </span>
                    <span>پروفایل</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`gap-x-1 ${
                      active ? "bg-green-500 text-white" : "text-gray-700"
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
                    <span>
                      <img src="/src/assets/Icons/wallet-2.svg" alt="" />
                    </span>
                    <span>پیگیری سفارش</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`gap-x-1 ${
                      active ? "bg-green-500 text-white" : "text-gray-700"
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
                    <span>
                      <img src="/src/assets/Icons/Heart.svg" alt="" />
                    </span>
                    <span> علاقه‌مندی‌ها</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`gap-x-1 ${
                      active ? "bg-green-500 text-white" : "text-gray-700"
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
                    <span>
                      <img src="/src/assets/Icons/location.svg" alt="" />
                    </span>
                    <span> آدرس‌های من</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={` gap-x-1 ${
                      active ? "bg-green-500 text-white" : "text-gray-700"
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
                    <span>
                      <img src="/src/assets/Icons/logout.svg" alt="" />
                    </span>
                    <span className=""> خروج از حساب</span>
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
