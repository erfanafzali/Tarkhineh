import Introduction from "../Introduction/Introduction";
import Menu from "../Menu/Menu";
import Branches from "../Branches/Branches";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="w-full">
      <Menu />
      <Outlet />
      <Introduction />
      <Branches />
    </div>
  );
}

export default Main;
