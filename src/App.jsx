import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Prices from "./pages/Prices.jsx";
import RoomDetail from "./pages/RoomDetail.jsx";
import Rooms from "./pages/Rooms.jsx";
import Summer from "./pages/Summer.jsx";
import Wellness from "./pages/Wellness.jsx";
import Winter from "./pages/Winter.jsx";

function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const node = document.querySelector(hash);
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/living" element={<Rooms />} />
        <Route path="/living/:slug" element={<RoomDetail />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </>
  );
}
