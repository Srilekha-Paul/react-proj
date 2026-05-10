import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.slice(0, 6).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList


// import { useState, useEffect } from 'react'
// import ProductCard from './ProductCard.jsx'
// import { products } from '../data/products.js'
// import { Funnel, Filter } from 'lucide-react'

// const ProductList = ({ initialFilter = 'all', className = '' }) => {
//   const [filter, setFilter] = useState(initialFilter)
//   const [filteredProducts, setFilteredProducts] = useState([])
//   const [sortBy, setSortBy] = useState('featured')
//   const [searchTerm, setSearchTerm] = useState('')

//   // Get unique categories
//   const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]

//   useEffect(() => {
//     let result = [...products]

//     // Filter by category
//     if (filter !== 'all') {
//       result = result.filter(p => p.category.toLowerCase() === filter.toLowerCase())
//     }

//     // Search filter
//     if (searchTerm) {
//       result = result.filter(p => 
//         p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         p.category.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     // Sort products
//     switch (sortBy) {
//       case 'price-low':
//         result.sort((a, b) => a.price - b.price)
//         break
//       case 'price-high':
//         result.sort((a, b) => b.price - a.price)
//         break
//       case 'newest':
//         result.sort((a, b) => b.id - a.id)
//         break
//       default:
//         // Featured (default order)
//         break
//     }

//     setFilteredProducts(result)
//   }, [filter, sortBy, searchTerm])

//   return (
//     <div className={`container ${className}`}>
//       {/* Filters & Search */}
//       <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-12 pb-8 border-b border-gray-200">
//         {/* Search */}
//         <div className="relative flex-1 max-w-md">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="form-input w-full pl-12 pr-4"
//           />
//           <Funnel className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//         </div>

//         {/* Filter & Sort */}
//         <div className="flex items-center gap-4 flex-wrap">
//           {/* Category Filter */}
//           <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border">
//             <Filter className="w-4 h-4 text-gray-400" />
//             <select 
//               value={filter} 
//               onChange={(e) => setFilter(e.target.value)}
//               className="bg-transparent border-none outline-none text-sm font-medium cursor-pointer"
//             >
//               {categories.map(cat => (
//                 <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
//               ))}
//             </select>
//           </div>

//           {/* Sort */}
//           <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border">
//             <select 
//               value={sortBy} 
//               onChange={(e) => setSortBy(e.target.value)}
//               className="bg-transparent border-none outline-none text-sm font-medium cursor-pointer"
//             >
//               <option value="featured">Featured</option>
//               <option value="price-low">Price: Low to High</option>
//               <option value="price-high">Price: High to Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Results Info */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//         <p className="text-lg font-semibold text-gray-700">
//           Showing {filteredProducts.length} of {products.length} products
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* No Results */}
//       {filteredProducts.length === 0 && (
//         <div className="col-span-full text-center py-24">
//           <div className="w-24 h-24 bg-gray-100 rounded-3xl mx-auto mb-8 flex items-center justify-center">
//             <Funnel className="w-12 h-12 text-gray-400" />
//           </div>
//           <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">No products found</h3>
//           <p className="text-gray-600 mb-8 max-w-md mx-auto">
//             Try adjusting your search or filter criteria to find what you're looking for.
//           </p>
//           <button 
//             onClick={() => {
//               setFilter('all')
//               setSearchTerm('')
//               setSortBy('featured')
//             }}
//             className="btn-primary"
//           >
//             Clear All Filters
//           </button>
//         </div>
//       )}

//       {/* Load More (Skeleton for future) */}
//       {filteredProducts.length > 0 && (
//         <div className="text-center mt-16">
//           <button className="btn-secondary px-12 py-4 text-lg">
//             Load More Products
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ProductList;