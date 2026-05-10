import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.jpg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = () => {

    // If already on home page
    if (location.pathname === "/") {

      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
        });
      }

    } else {

      // Go to Home Page
      navigate("/");

      // Wait then scroll
      setTimeout(() => {

        const aboutSection = document.getElementById("about");

        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
          });
        }

      }, 500);
    }
  };

  return (
    <header className="bg-black text-white px-6 py-5 sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo
        <h1 className="text-3xl font-bold">
          Luxury Jewelry
        </h1> */}

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

          {/* About Scroll */}
          <button
            onClick={handleAboutClick}
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </button>

          <Link
            to="/cart"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Cart
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;

// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // About Scroll Function
//   const handleAboutClick = () => {

//     // If already on Home Page
//     if (location.pathname === "/") {

//       const section = document.getElementById("about");

//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//         });
//       }

//     } else {

//       // Navigate to Home First
//       navigate("/");

//       // Then Scroll to About
//       setTimeout(() => {

//         const section = document.getElementById("about");

//         if (section) {
//           section.scrollIntoView({
//             behavior: "smooth",
//           });
//         }

//       }, 300);
//     }
//   };

//   return (
//     <header className="bg-black text-white px-6 py-5 sticky top-0 z-50 shadow-lg">

//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* Logo */}
//         <h1 className="text-3xl font-bold">
//           Luxury Jewelry
//         </h1>

//         {/* Navigation */}
//         <nav className="flex items-center gap-8 text-lg font-medium">

//           {/* Home */}
//           <Link
//             to="/"
//             className="hover:text-yellow-400 transition-colors duration-300"
//           >
//             Home
//           </Link>

//           {/* Shop */}
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

//           {/* Cart */}
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

// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleAboutClick = () => {
//     // If already on home page
//     if (location.pathname === "/") {
//       const section = document.getElementById("about");

//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//         });
//       }
//     } else {
//       // Navigate to home first
//       navigate("/");

//       // Scroll after page loads
//       setTimeout(() => {
//         const section = document.getElementById("about");

//         if (section) {
//           section.scrollIntoView({
//             behavior: "smooth",
//           });
//         }
//       }, 200);
//     }
//   };

//   return (
//     <header className="bg-black text-white px-6 py-5 sticky top-0 z-50 shadow-lg">

//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* Logo */}
//         <h1 className="text-3xl font-bold">
//           Luxury Jewelry
//         </h1>

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