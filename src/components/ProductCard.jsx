import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 hover:-translate-y-2 transition-all duration-300 border hover:border-gold-200">
      <div className="w-full h-64 bg-gray-100 rounded-2xl mb-6 overflow-hidden group-hover:bg-gradient-to-t group-hover:from-gold-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      <div>
        <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full mb-3">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        </div>
        
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.preventDefault()
              addToCart(product)
            }}
            className="flex-1 bg-gold-600 hover:bg-gold-700 text-white py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
          <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all hover:scale-110">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

// import { Link } from 'react-router-dom'
// import { Heart, ShoppingCart, Eye } from 'lucide-react'
// import { useState } from 'react'
// import { useCart } from '../context/CartContext.jsx'

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart()
//   const [isHovered, setIsHovered] = useState(false)
//   const [imageLoaded, setImageLoaded] = useState(false)

//   const handleAddToCart = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     addToCart(product)
//   }

//   return (
//     <Link 
//       to={`/product/${product.id}`}
//       className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 card-hover border border-gray-100"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Product Image Container */}
//       <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
//         {!imageLoaded && (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//             <div className="spinner"></div>
//           </div>
//         )}
        
//         <img 
//           src={product.image}
//           alt={product.name}
//           className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//           onLoad={() => setImageLoaded(true)}
//           onError={(e) => {
//             e.target.src = '/images/product1.jpg' // Fallback image
//           }}
//         />

//         {/* Quick Actions Overlay */}
//         <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 ${isHovered ? 'visible' : 'invisible'}`}>
          
//           {/* Wishlist Button */}
//           <button className="btn-wishlist absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110">
//             <Heart className="w-5 h-5 text-gray-700 group-hover:text-red-500 transition-colors" fill="currentColor" />
//           </button>

//           {/* Add to Cart Button */}
//           {product.inStock && (
//             <button
//               onClick={handleAddToCart}
//               className="btn-add-cart mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
//             >
//               <ShoppingCart className="w-5 h-5 text-white" />
//             </button>
//           )}
//         </div>

//         {/* Category Badge */}
//         <span className="product-badge bg-white/95 backdrop-blur-sm shadow-lg">
//           {product.category}
//         </span>

//         {/* Stock Status */}
//         {!product.inStock && (
//           <div className="absolute inset-0 bg-red-500/90 flex items-center justify-center">
//             <span className="text-white text-xl font-bold uppercase tracking-wider">Sold Out</span>
//           </div>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="p-8">
//         <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
//           {product.name}
//         </h3>
        
//         <div className="flex items-center justify-between mb-6">
//           <span className="text-2xl font-bold text-gray-900">${product.price}</span>
//           {product.inStock && (
//             <span className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full font-medium">
//               In Stock
//             </span>
//           )}
//         </div>

//         {/* Quick View Button */}
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <button className="w-full btn-secondary flex items-center justify-center gap-2 text-sm">
//             <Eye className="w-4 h-4" />
//             Quick View
//           </button>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default ProductCard;