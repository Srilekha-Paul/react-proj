// import { Link, useLocation } from 'react-router-dom'
// import { ShoppingCart, Menu, X, Search } from 'lucide-react'
// import { useState } from 'react'
// import { useCart } from '../context/CartContext.jsx'

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [searchOpen, setSearchOpen] = useState(false)
//   const { cart } = useCart()
//   const location = useLocation()
//   const totalItems = cart.length

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Shop', path: '/shop' },
//     { name: 'Cart', path: '/cart' }
//   ]

//   return (
//     <header className="header-nav">
//       <div className="container-x py-4">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo */}
//           <Link to="/" className="text-3xl font-serif font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//             💎 Luxury Jewels
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center space-x-12">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`nav-link py-2 px-3 relative font-medium text-lg transition-all duration-300 ${
//                   location.pathname === link.path 
//                     ? 'text-gold-600 after:opacity-100' 
//                     : 'text-gray-700 hover:text-gold-600'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side Actions */}
//           <div className="flex items-center space-x-4">
            
//             {/* Search */}
//             <button 
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="p-2 lg:hidden text-gray-700 hover:text-gold-600 transition-colors"
//             >
//               <Search className="w-6 h-6" />
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gold-600 transition-colors" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-1 ml-2"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-6">
//             <nav className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="py-3 px-4 rounded-xl font-medium text-lg hover:bg-gold-50 hover:text-gold-600 transition-all"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header


import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { cart } = useCart();
  const location = useLocation();

  const totalItems = cart.length;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            💎 Luxury Jewels
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-lg transition-all duration-300 hover:text-yellow-500 ${
                  location.pathname === link.path
                    ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex p-2 text-gray-700 hover:text-yellow-500 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2">
              
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-yellow-500 transition-colors" />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>

          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="hidden md:block py-4">
            <input
              type="text"
              placeholder="Search jewelry..."
              className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            
            <div className="flex flex-col space-y-3">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 px-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-yellow-100 text-yellow-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;