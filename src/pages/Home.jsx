import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import About from "./About";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <ProductList />
      </section>

      {/* About Section */}
      <About />
    </>
  );
};

export default Home;

// import Hero from "../components/Hero";
// // import About from "./About";
// import ProductList from "../components/ProductList";

// const Home = () => {
//   return (
//     <>
//       <Hero />
     
//       <ProductList />
//     </>
//   );
// };

// export default Home;
// import Hero from "../components/Hero";
// import About from "./About";
// import ProductList from "../components/ProductList";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <About />
//       <ProductList />
//     </>
//   );
// };

// export default Home;

// import Header from '../components/Header'
// import Footer from '../components/Footer'

// const Home = () => (
//   <div>
//     <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       <div className="container text-center">
//         <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
//           Welcome to Luxury Jewels
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
//           Your premier destination for exquisite jewelry
//         </p>
//         <a href="/shop" className="btn-primary inline-block text-lg px-12 py-4">
//           Shop Collection
//         </a>
//       </div>
//     </section>
//   </div>
// )

// export default Home

// function Home() {
//   return (
//     <div className="bg-black text-white min-h-screen p-10">
//       <h1 className="text-5xl">
//         Home Working
//       </h1>
//     </div>
//   );
// }

// export default Home;

// import Hero from '../components/Hero.jsx'
// import ProductList from '../components/ProductList.jsx'
// import { Link } from 'react-router-dom'
// const Home = () => {
//   return (
//     <>
//       <Hero />
      
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
//               Featured Collection
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Our most popular pieces, handpicked for their exceptional craftsmanship and timeless design.
//             </p>
//           </div>
          
//           <ProductList />
          
//           <div className="text-center mt-16">
//             <Link
//               to="/shop"
//               className="inline-flex items-center px-12 py-4 bg-gold-600 hover:bg-gold-700 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
//             >
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home;