import { Outlet } from "react-router-dom";
import NavBar from "../Nav";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-4">
        <Outlet />  {/* This is where pages render */}
      </main>
      <Footer />
    </div>
  );
}
