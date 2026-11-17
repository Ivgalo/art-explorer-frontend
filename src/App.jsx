
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/explorar" element={<Explore />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App;
