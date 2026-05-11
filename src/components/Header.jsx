import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useCart } from "../context/CartContext.jsx";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-black text-white sticky top-0 z-[100] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
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

          {/* Cart Icon */}
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



// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.jpg";

// const Header = () => {
//   return (
//     <header className="bg-black text-white sticky top-0 z-50 shadow-lg">

//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

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
//         <nav className="flex items-center gap-10 text-lg font-medium">

//           <a
//             href="#home"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             Home
//           </a>

//           <a
//             href="#shop"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             Shop
//           </a>

//           <a
//             href="#about"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             About
//           </a>

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





// import { Link } from "react-router-dom";
// import { ShoppingBag } from "lucide-react";

// import logo from "../assets/images/logo.jpg";

// import { useCart } from "../context/CartContext";

// const Header = () => {

//   const { cart } = useCart();

//   // Count total items
//   const totalItems = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <header className="bg-black text-white sticky top-0 z-50 shadow-lg">

//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
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
//         <nav className="flex items-center gap-10 text-lg font-medium">

//           <a
//             href="#home"
//             className="hover:text-yellow-400 transition"
//           >
//             Home
//           </a>

//           <a
//             href="#shop"
//             className="hover:text-yellow-400 transition"
//           >
//             Shop
//           </a>

//           <a
//             href="#about"
//             className="hover:text-yellow-400 transition"
//           >
//             About
//           </a>

//           {/* Cart Icon */}
//           <Link
//             to="/cart"
//             className="relative flex items-center gap-2 hover:text-yellow-400 transition"
//           >

//             <ShoppingBag className="w-7 h-7" />

//             <span>Cart</span>

//             {/* Badge */}
//             {totalItems > 0 && (
//               <span className="absolute -top-3 -right-4 bg-yellow-500 text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
//                 {totalItems}
//               </span>
//             )}

//           </Link>

//         </nav>

//       </div>

//     </header>
//   );
// };

// export default Header;
// // 

