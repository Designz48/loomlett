// src/components/Header.jsx
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-pink-200">
      {/* ---- Glass‑like inner container ---- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3 bg-white/85 backdrop-blur-sm rounded-b-3xl shadow-lg">
        {/* ----- Logo ----- */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wider text-primary hover:text-primary/80 transition-colors"
        >
          Loomlett
        </Link>

        {/* ----- Navigation Links (centered) ----- */}
        <nav className="flex-1 hidden md:flex justify-center gap-8">
          <NavItem to="/" label="Shop" />
          <NavItem to="/downloads" label="Downloads" />
          <NavItem to="/about" label="About" />
        </nav>

        {/* ----- Mobile menu toggle (optional) ----- */}
        {/* You can later add a hamburger icon that opens a drawer – omitted for brevity */}

        {/* ----- Cart button (icon only) ----- */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          aria-label="Cart"
        >
          <ShoppingCart className="w-5 h-5 text-primary" />
        </button>
      </div>
    </header>
  );
}

/* --------------------------------------------------------------
   Small helper component – keeps the markup tidy
   -------------------------------------------------------------- */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `relative text-base font-medium text-gray-800 hover:text-primary/80 transition-colors ${
          isActive ? "text-primary" : ""
        } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 ${
          isActive ? "after:scale-x-100" : "group-hover:after:scale-x-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
