import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-[100%] text-[#00BFFF] font-[700] bg-[#111827]">
      <nav className="flex justify-between w-[85%] mx-auto py-3">
        <div className="flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/components">Components</NavLink>
          <NavLink to="/forms">Forms</NavLink>
        </div>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
