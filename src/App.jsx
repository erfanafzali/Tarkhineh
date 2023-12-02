import "./App.css";
import Branches from "./components/Branches/Branches";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="mx-auto container font-vazir">
      <Header />
      <SideBar />
      <Menu />
      <Introduction />
      <Branches />
    </div>
  );
}

export default App;
