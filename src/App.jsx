import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyOtp from "./pages/auth/VerifyOtp";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import AdminRoute from "./routes/AdminRoute";

import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";

function App() {
  const location = useLocation();

  // Hide header/footer on admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />

        {/* PUBLIC ONLY */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/verify-otp"
          element={
            <PublicRoute>
              <VerifyOtp />
            </PublicRoute>
          }
        />

        {/* PROTECTED */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;

// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Shop from "./pages/Shop";
// import CartPage from "./pages/CartPage";
// import Checkout from "./pages/Checkout";
// import ProductDetail from "./pages/ProductDetail";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="text-5xl p-20">
//       Website Working
//     </div>
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";

// const About = () => <h1 className="p-20 text-5xl">About Page</h1>;
// const Shop = () => <h1 className="p-20 text-5xl">Shop Page</h1>;
// const CartPage = () => <h1 className="p-20 text-5xl">Cart Page</h1>;
// const Checkout = () => <h1 className="p-20 text-5xl">Checkout Page</h1>;
// const ProductDetail = () => (
//   <h1 className="p-20 text-5xl">Product Detail Page</h1>
// );

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

// import Header from "./components/Header";
// import Hero from "./components/Hero";

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import ProductList from "./components/ProductList";
// import Footer from "./components/Footer";

// import About from "./pages/About";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <ProductList />
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <Header />

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//       </Routes>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import ProductList from "./components/ProductList";
// import Footer from "./components/Footer";

// import About from "./pages/About";

// function Home() {
//   return (
//     <>
//       <Home/>

//       <Hero />

//       {/* About Section on Home Page */}
//       <About />

//       {/* Products */}
//       <ProductList />
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <Header />

//       <Routes>

//         {/* Home Page */}
//         <Route path="/" element={<Home />} />

//          <Route path="/" element={<Hero />} />

//         {/* Separate About Page */}
//         <Route path="/about" element={<About />} />

//       </Routes>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom'
// import { CartProvider } from './context/CartContext.jsx'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
// import Home from './pages/Home.jsx'
// import Shop from './pages/Shop.jsx'
// // import About from "./components/About";
// import About from "./pages/About";

// function App() {
//   return (
//     <CartProvider>
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/about" element={<About />} />

//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </CartProvider>
//   )
// }

// export default App

// import { Routes, Route } from 'react-router-dom'
// import { CartProvider } from './context/CartContext.jsx'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
// import Home from './pages/Home.jsx'
// import Shop from './pages/Shop.jsx'
// import ProductDetail from './pages/ProductDetail.jsx'
// import CartPage from './pages/CartPage.jsx'
// import Checkout from './pages/Checkout.jsx'

// function App() {
//   return (
//     <CartProvider>
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/checkout" element={<Checkout />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </CartProvider>
//   )
// }

// export default App
