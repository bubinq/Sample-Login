import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar/>
      <main className="h-screen bg-[#111827] text-[#fff]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
