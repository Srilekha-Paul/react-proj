import ProductList from '../components/ProductList.jsx'

const Shop = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container-x">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exquisite jewelry crafted with precision and passion
          </p>
        </div>
        <ProductList />
      </div>
    </div>
  )
}

export default Shop


// import { useState } from 'react'
// import ProductList from '../components/ProductList.jsx'
// import { products } from '../data/products.js'

// const Shop = () => {
//   const [filter, setFilter] = useState('all')
//   const categories = ['all', ...new Set(products.map(p => p.category))]

//   return (
//     <section className="py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
//             Our Collection
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Explore our curated selection of fine jewelry, each piece crafted with meticulous attention to detail.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 filter === category
//                   ? 'bg-gold-600 text-white shadow-lg'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
//               }`}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>

//         <ProductList filter={filter} />
//       </div>
//     </section>
//   )
// }

// export default Shop;