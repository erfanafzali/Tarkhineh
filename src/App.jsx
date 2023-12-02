import "./App.css";
import Branches from "./components/Branches/Branches";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
