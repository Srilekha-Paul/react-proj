import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList.jsx'
import heroBg from '../assets/images/hero-bg.jpg'  // ✅ ES6 Import

const Home = () => {
  return (
    <>
      {/* ========================================= */}
      {/* HERO SECTION - ES6 IMPORT */}
      {/* ========================================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Your Local Hero Image - ES6 Import */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed object-cover opacity-90"
          style={{
            backgroundImage: `url(${heroBg})`  // ✅ ES6 Import Usage
          }}
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10" />
        
        {/* Hero Content */}
        <div className="container-x text-center relative z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto py-20">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-8 leading-none drop-shadow-2xl animate-fadeInUp">
              <span>Luxury</span>
              <span className="block text-gold-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Jewels</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fadeInUp animation-delay-300">
              Timeless elegance handcrafted for the modern woman. 
              Exquisite jewelry that tells your story.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fadeInUp animation-delay-600">
              <Link
                to="/shop"
                className="group relative inline-flex items-center gap-3 text-lg px-12 py-5 bg-white/20 backdrop-blur-xl hover:bg-white/30 border-2 border-white/40 rounded-3xl font-bold text-white shadow-2xl hover:shadow-white/50 transition-all duration-500 hover:scale-[1.05] hover





// import { Link } from 'react-router-dom'
// import ProductList from '../components/ProductList.jsx'
// // import heroBg from "../assets/hero-bg.jpg";
// import heroBg from "../assests/images/hero-bg.jpg";

// const Home = () => {
//   return (
//     <>
//       {/* ========================================= */}
//       {/* HERO SECTION - YOUR LOCAL IMAGE */}
//       {/* ========================================= */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
//         {/* Your Local Hero Background Image */}
//         <div 
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed object-cover opacity-90"
//           style={{
//             backgroundImage: `url(${heroBg})`
//           }}
//         />
        
//         {/* Dark Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10" />
        
//         {/* Hero Content */}
//         <div className="container-x text-center relative z-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto py-20">
//             {/* Headline */}
//             <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-8 leading-none drop-shadow-2xl animate-fadeInUp">
//               <span>Luxury</span>
//               <span className="block text-gold-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Jewels</span>
//             </h1>
            
//             {/* Subtitle */}
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fadeInUp animation-delay-300">
//               Timeless elegance handcrafted for the modern woman. 
//               Exquisite jewelry that tells your story.
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fadeInUp animation-delay-600">
//               <Link
//                 to="/shop"
//                 className="group relative inline-flex items-center gap-3 text-lg px-12 py-5 bg-white/20 backdrop-blur-xl hover:bg-white/30 border-2 border-white/40 rounded-3xl font-bold text-white shadow-2xl hover:shadow-white/50 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1"
//               >
//                 <span>Shop Collection</span>
//                 <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
              
//               <Link
//                 to="/shop"
//                 className="font-bold text-white/90 hover:text-white transition-all duration-500 flex items-center gap-3 group hover:scale-110 hover:underline"
//               >
//                 Explore All Pieces
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
            
//             {/* Hero Stats */}
//             <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto text-white/90 text-center lg:grid-cols-3 animate-fadeInUp animation-delay-900">
//               <div className="group hover:scale-110 transition-transform">
//                 <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gold-400 mb-2 drop-shadow-lg">500+</div>
//                 <div className="text-sm uppercase tracking-widest font-medium">Pieces</div>
//               </div>
//               <div className="group hover:scale-110 transition-transform">
//                 <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gold-400 mb-2 drop-shadow-lg">10K+</div>
//                 <div className="text-sm uppercase tracking-widest font-medium">Customers</div>
//               </div>
//               <div className="group hover:scale-110 transition-transform">
//                 <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gold-400 mb-2 drop-shadow-lg">5⭐</div>
//                 <div className="text-sm uppercase tracking-widest font-medium">Rating</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Scroll Indicator */}
//           <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-pulse opacity-80 z-20">
//             <div className="flex flex-col items-center space-y-2">
//               <div className="w-1 h-16 bg-gradient-to-t from-transparent via-white to-transparent rounded-full"></div>
//               <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//               </svg>
//               <span className="text-xs uppercase tracking-wider font-medium text-white/70">Scroll</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================= */}
//       {/* FEATURED PRODUCTS */}
//       {/* ========================================= */}
//       <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.1),transparent)]" />
//         <div className="container-x relative z-10">
//           <div className="text-center mb-24">
//             <span className="inline-block px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-lg font-bold rounded-3xl mb-8 shadow-xl animate-float">
//               ✨ Featured Collection
//             </span>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6 drop-shadow-lg">
//               Our Best Sellers
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our most loved pieces. Handpicked for their timeless beauty and craftsmanship.
//             </p>
//           </div>
          
//           <ProductList />
          
//           <div className="text-center mt-24 pt-20 border-t border-gray-200">
//             <Link
//               to="/shop"
//               className="btn-primary inline-flex items-center gap-3 text-xl px-20 py-7 shadow-2xl hover:shadow-gold/25 backdrop-blur-sm"
//             >
//               View Entire Collection
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========================================= */}
//       {/* TRUST SECTION */}
//       {/* ========================================= */}
//       <section className="py-32 bg-white">
//         <div className="container-x">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//             <div className="group p-10 rounded-3xl border border-gray-100 hover:border-gold-200 hover:bg-gold-50/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
//               <div className="w-20 h-20 bg-gold-100 rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-gold-200 group-hover:scale-110 transition-all duration-300">
//                 <svg className="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors">Free Shipping</h3>
//               <p className="text-lg text-gray-600 font-medium">On orders over $200 worldwide</p>
//             </div>
            
//             <div className="group p-10 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
//               <div className="w-20 h-20 bg-emerald-100 rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
//                 <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">30-Day Returns</h3>
//               <p className="text-lg text-gray-600 font-medium">Hassle-free returns & exchanges</p>
//             </div>
            
//             <div className="group p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
//               <div className="w-20 h-20 bg-blue-100 rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
//                 <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Fast Delivery</h3>
//               <p className="text-lg text-gray-600 font-medium">2-3 business days anywhere</p>
//             </div>
            
//             <div className="group p-10 rounded-3xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
//               <div className="w-20 h-20 bg-purple-100 rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
//                 <svg className="w-10 h


// import { Link } from 'react-router-dom'
// import ProductList from '../components/ProductList.jsx'

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section with Local Image */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Hero Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
//           style={{
//             backgroundImage: `url('/src/assets/images/hero-bg.jpg')`
//           }}
//         />
        
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70 z-10" />
        
//         {/* Hero Content */}
//         <div className="container-x text-center relative z-20 px-6">
//           <div className="max-w-5xl mx-auto animate-fadeInUp">
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
//               Timeless<br className="hidden lg:inline" />
//               <span className="text-gold-400 block text-shadow">Elegance</span>
//             </h1>
//             <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fadeInUp animation-delay-300">
//               Discover our exquisite collection of fine jewelry handcrafted with passion 
//               and precision for the modern woman.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp animation-delay-600">
//               <Link
//                 to="/shop"
//                 className="btn-primary inline-flex items-center gap-3 text-lg px-16 py-6 shadow-2xl hover:shadow-gold/25 backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-500 transform hover:scale-105"
//               >
//                 Shop Collection
//               </Link>
//               <Link
//                 to="/shop"
//                 className="font-semibold text-white/90 hover:text-white/100 transition-all duration-300 flex items-center gap-3 group hover:scale-105"
//               >
//                 Explore All
//                 <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>
            
//             {/* Scroll Indicator */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//               <svg className="w-6 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Collection */}
//       <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container-x">
//           <div className="text-center mb-24">
//             <span className="inline-block px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold rounded-full mb-8 shadow-lg animate-float">
//               ✨ Featured Collection
//             </span>
//             <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
//               Our Best Sellers
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//               Curated selection of our most popular pieces, handpicked for their timeless beauty
//             </p>
//           </div>
          
//           <ProductList />
          
//           <div className="text-center mt-24">
//             <Link
//               to="/shop"
//               className="btn-primary inline-flex items-center gap-3 text-xl px-16 py-6 shadow-2xl"
//             >
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Trust Signals */}
//       <section className="py-24 bg-white">
//         <div className="container-x">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
//             <div className="group space-y-4 p-8 hover:bg-gold-50 rounded-3xl transition-all duration-500 hover:scale-105">
//               <div className="w-20 h-20 bg-gold-100 rounded-3xl mx-auto flex items-center justify-center group-hover:bg-gold-200 transition-colors">
//                 <svg className="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Free Shipping</h3>
//               <p className="text-lg text-gray-600 font-medium">Orders over $200</p>
//             </div>
            
//             <div className="group space-y-4 p-8 hover:bg-emerald-50 rounded-3xl transition-all duration-500 hover:scale-105">
//               <div className="w-20 h-20 bg-emerald-100 rounded-3xl mx-auto flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
//                 <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">30-Day Returns</h3>
//               <p className="text-lg text-gray-600 font-medium">Hassle-free</p>
//             </div>
            
//             <div className="group space-y-4 p-8 hover:bg-blue-50 rounded-3xl transition-all duration-500 hover:scale-105">
//               <div className="w-20 h-20 bg-blue-100 rounded-3xl mx-auto flex items-center justify-center group-hover:bg-blue-200 transition-colors">
//                 <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Fast Delivery</h3>
//               <p className="text-lg text-gray-600 font-medium">2-3 days</p>
//             </div>
            
//             <div className="group space-y-4 p-8 hover:bg-purple-50 rounded-3xl transition-all duration-500 hover:scale-105">
//               <div className="w-20 h-20 bg-purple-100 rounded-3xl mx-auto flex items-center justify-center group-hover:bg-purple-200 transition-colors">
//                 <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Secure Payment</h3>
//               <p className="text-lg text-gray-600 font-medium">SSL Protected</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home