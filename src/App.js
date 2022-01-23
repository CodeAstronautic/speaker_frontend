import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addeventpage from "./components/Addeventpage";
import Navbar from "./components/Navbar";
import Firstpage from "./components/Firstpage";
import About from "./components/About";
import Categories from "./components/Categories";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Eventpage from "./components/Eventpage";
import Plan from "./components/Plan";
import About2 from "./components/About2";
const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/event" element={<Event />} />
          <Route path="/addevent" element={<Addeventpage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
