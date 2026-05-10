import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import logo from "../assets/images/logo.png";

import { useCart } from "../context/CartContext";

const Header = () => {

  const { cart } = useCart();

  // Total cart quantity
  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">

          <img
            src={logo}
            alt="Luxury Jewelry Logo"
            className="w-14 h-14 object-contain"
          />

          <h1 className="text-3xl font-bold tracking-wide">
            Luxury Jewelry
          </h1>

        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-lg font-medium">

          <a
            href="#home"
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>

          <a
            href="#shop"
            className="hover:text-yellow-400 transition"
          >
            Shop
          </a>

          <a
            href="#about"
            className="hover:text-yellow-400 transition"
          >
            About
          </a>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 hover:text-yellow-400 transition"
          >

            <ShoppingBag className="w-7 h-7" />

            <span>Cart</span>

            {/* Cart Count */}
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-4 bg-yellow-500 text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
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


// import { Link, useLocation, useNavigate } from "react-router-dom";

// import logo from "../assets/images/logo.jpg";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleAboutClick = () => {

//     // If already on home page
//     if (location.pathname === "/") {

//       const aboutSection = document.getElementById("about");

//       if (aboutSection) {
//         aboutSection.scrollIntoView({
//           behavior: "smooth",
//         });
//       }

//     } else {

//       // Go to Home Page
//       navigate("/");

//       // Wait then scroll
//       setTimeout(() => {

//         const aboutSection = document.getElementById("about");

//         if (aboutSection) {
//           aboutSection.scrollIntoView({
//             behavior: "smooth",
//           });
//         }

//       }, 500);
//     }
//   };

//   return (
//     <header className="bg-black text-white px-6 py-5 sticky top-0 z-50 shadow-lg">

//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* Logo
//         <h1 className="text-3xl font-bold">
//           Luxury Jewelry
//         </h1> */}

//         {/* Logo + Brand */}
//         <Link to="/" className="flex items-center gap-4">

//           <img
//             src={logo}
//             alt="Luxury Jewelry Logo"
//             className="w-14 h-14 object-contain"
//           />

//           <h1 className="text-3xl font-bold tracking-wide">
//             Luxury Jewelry
//           </h1>

//         </Link>

//         {/* Navigation */}
//         <nav className="flex items-center gap-8 text-lg font-medium">

//           <Link
//             to="/"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             Home
//           </Link>

//           <Link
//             to="/shop"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             Shop
//           </Link>

//           {/* About Scroll */}
//           <button
//             onClick={handleAboutClick}
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             About
//           </button>

//           <Link
//             to="/cart"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             Cart
//           </Link>

//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

