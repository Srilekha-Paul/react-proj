import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useCart } from "../context/CartContext.jsx";
import { ShoppingCart, User, LogOut, Package, ChevronDown, Menu, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice.js";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    setOpenDropdown(false);
    setMobileMenuOpen(false);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-4" onClick={() => setMobileMenuOpen(false)}>
          <img
            src={logo}
            alt="Luxury Jewelry Logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/logo.jpg";
            }}
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-full border border-yellow-500/50"
          />

          <h1 className="text-xl sm:text-3xl font-bold tracking-wide font-serif text-white">
            Luxury Jewels
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
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

        {/* Mobile Header Right Controls */}
        <div className="flex md:hidden items-center gap-4">
          {/* Cart Link */}
          <Link
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="relative text-white hover:text-yellow-400 p-1"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-yellow-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-yellow-400" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 text-white px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-400 py-2 border-b border-gray-800/60"
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-400 py-2 border-b border-gray-800/60"
          >
            Shop Collection
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium hover:text-yellow-400 py-2 border-b border-gray-800/60"
          >
            About Us
          </Link>

          {isAuthenticated ? (
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-xl border border-gray-800">
                {user?.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border border-yellow-500"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                    {user?.first_name ? user.first_name.charAt(0) : <User className="w-5 h-5 text-black" />}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm truncate text-white">
                    {user?.first_name || "Account"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                </div>
              </div>

              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-yellow-400 font-medium"
                >
                  <User className="w-5 h-5" /> Admin Panel
                </Link>
              )}

              <Link
                to="/orders"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 py-2 text-gray-200 hover:text-yellow-400 font-medium"
              >
                <Package className="w-5 h-5 text-yellow-400" /> My Orders
              </Link>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 py-2.5 px-4 bg-red-500/10 text-red-400 rounded-xl font-medium hover:bg-red-500/20 transition"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          ) : (
            <div className="pt-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-xl font-bold shadow-md"
              >
                Sign In / Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

