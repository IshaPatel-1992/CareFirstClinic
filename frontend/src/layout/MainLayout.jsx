// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
