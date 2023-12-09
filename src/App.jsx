import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import PageOfBranches from "./components/PageOfBranches/PagesOfBranches";


function App() {
  return (
    <div className="mx-auto container font-vazir">
      <Header />
      <SideBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/branch" element={<PageOfBranches />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="mx-auto container font-vazir">
//       <Routes>
//         <Route
//           path="/with-sidebar"
//           element={
//             <>
//               <Header />
//               <SideBar />
//               <Routes>
//                 <Route index element={<Main />} />
//                 <Route path="/branch" element={<PageOfBranches />} />
//               </Routes>
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/without-sidebar"
//           element={
//             <>
//               <Header />
//               <Routes>
//                 <Route index element={<NoSidebarMain />} />
//                 <Route path="/branch" element={<NoSidebarPageOfBranches />} />
//               </Routes>
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;
