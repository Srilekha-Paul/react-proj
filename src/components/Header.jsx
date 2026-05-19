import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useCart } from "../context/CartContext.jsx";
import { ShoppingCart, User, LogOut, Package, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice.js";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const { cart } = useCart();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    setOpenDropdown(false);
  };

  // Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black text-white sticky top-0 z-[100] shadow-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Luxury Jewelry Logo"
            className="w-14 h-14 object-contain rounded-full"
          />

          <h1 className="text-3xl font-bold tracking-wide">Luxury Jewelry</h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </Link>

          {/* AUTH */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              {/* User Button */}
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
              >
                {/* User Image */}
                {user?.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover border-2 border-yellow-500"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                )}

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {openDropdown && (
                <div className="absolute right-0 mt-4 w-64 bg-white text-black rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* User Info */}
                  <div className="px-5 py-4 border-b bg-gray-50">
                    <h3 className="font-bold text-lg">
                      {user?.first_name || "User"}
                    </h3>

                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>

                  {/* Menu */}
                  <div className="py-2">
                    {isAuthenticated && user?.role === "admin" && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-3 px-5 py-3 hover:bg-yellow-50 transition-colors"
                        onClick={() => setOpenDropdown(false)}
                      >
                        <User className="w-5 h-5" />
                        Admin Panel
                      </Link>
                    )}
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-yellow-50 transition-colors"
                      onClick={() => setOpenDropdown(false)}
                    >
                      <User className="w-5 h-5" />
                      Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="flex items-center gap-3 px-5 py-3 hover:bg-yellow-50 transition-colors"
                      onClick={() => setOpenDropdown(false)}
                    >
                      <Package className="w-5 h-5" />
                      Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-red-500 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-yellow-400 transition-colors duration-300"
          >
            <ShoppingCart className="w-7 h-7" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
