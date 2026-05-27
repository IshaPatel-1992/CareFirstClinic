import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Doctors from "./pages/Doctors.jsx";
import Appointment from "./pages/Appointment.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;