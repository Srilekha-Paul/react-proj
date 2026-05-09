import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'  // ✅ Add this

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />  // ✅ Add this
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App

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

// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;

// function App() {
//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         color: "white",
//         minHeight: "100vh",
//         padding: "40px",
//         fontSize: "40px",
//       }}
//     >
//       React Working Successfully
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom'
// import { CartProvider } from './context/CartContext.jsx'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
// import Home from './pages/Home.jsx'
// import Shop from './pages/Shop.jsx'
// import ProductDetail from './pages/ProductDetail.jsx'
// import CartPage from './pages/CartPage.jsx'
// import Checkout from './pages/Checkout.jsx'
// import './index.css'

// function App() {
//   return (
//     <CartProvider>
//       <div className="min-h-screen flex flex-col">
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