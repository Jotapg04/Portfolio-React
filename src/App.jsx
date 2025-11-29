import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./css/style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';



export default function App() {
  const location = useLocation();

  // Si estamos en /newsletter, no mostramos Header ni el Footer
  const showLayout = location.pathname !== "/newsletter";

  return (
    <>
      {showLayout && <Header />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      {showLayout && <Footer />}
    </>
  );
}
