import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList.jsx'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent" />
        
        <div className="container-x text-center relative z-10 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight animate-fadeInUp">
              Timeless<br className="hidden lg:inline" />
              <span className="text-gold-400 text-shadow">Elegance</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
              Discover exquisite jewelry handcrafted with passion and precision. 
              Timeless pieces for the modern woman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp animation-delay-600">
              <Link
                to="/shop"
                className="btn-primary inline-flex items-center gap-3 text-lg px-12 py-5 shadow-2xl"
              >
                Shop Collection
              </Link>
              <Link
                to="/shop"
                className="font-semibold text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                Watch Collection Video
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 bg-gray-50">
        <div className="container-x">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full mb-6">
              ✨ Featured Collection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Best Sellers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated selection of our most popular pieces, loved by thousands
            </p>
          </div>
          
          <ProductList />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gold-100 rounded-3xl mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">On orders over $200</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">30 Day Returns</h3>
              <p className="text-gray-600">Hassle-free returns</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">2-3 business days</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-3xl mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Secure Payment</h3>
              <p className="text-gray-600">SSL encrypted</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

// import Header from '../components/Header'
// import Footer from '../components/Footer'

// const Home = () => (
//   <div>
//     <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       <div className="container-x text-center">
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