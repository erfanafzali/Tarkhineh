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
    <button className=" md:hidden">
      <img src="/src/assets/Icons/menu.svg" alt="menu" className=" sm:w-10" />
    </button>
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
      <span className="w-full hidden md:flex">
        <button className="bg-green-100 p-[2.2px] w-full flex justify-center items-center rounded">
          <img
            src="/src/assets/Icons/search-normal.svg"
            alt=""
            className="sm:w-6"
          />
        </button>
      </span>
      <span className="w-full">
        <button className="bg-green-100 p-[2.2px] w-full flex justify-center items-center rounded">
          <img
            src="/src/assets/Icons/shopping-cart.svg"
            alt=""
            className="sm:w-6"
          />
        </button>
      </span>
      <span className="w-full">
        <button className="bg-green-100 p-[2.2px] w-full flex justify-center items-center rounded">
          <img src="/src/assets/Icons/user.svg" alt="" className="sm:w-6" />
        </button>
      </span>
    </div>
  );
}

function NavBar() {
  return (
    <div className="hidden md:flex justify-center items-center md:px-2">
      <ul className="w-full flex justify-center items-center font-bold xl:text-xl lg:text-lg xl:gap-x-8 lg:gap-x-6 md:text-sm md:gap-x-4 text-gray-500">
        <li>صفحه ی اصلی</li>
        <li>شعبه</li>
        <li>منو</li>
        <li>اعطای نمایندگی</li>
        <li>درباره ی ما</li>
        <li>تماس با ما</li>
      </ul>
    </div>
  );
}
