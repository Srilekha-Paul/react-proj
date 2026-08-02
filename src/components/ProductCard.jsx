import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-4 sm:p-6 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border hover:border-yellow-200 flex flex-col justify-between">
      <div>
        <div className="w-full h-56 sm:h-64 bg-gray-50 rounded-2xl mb-4 sm:mb-6 overflow-hidden group-hover:bg-gradient-to-t group-hover:from-yellow-50 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `/assets/images/product${product.id}.jpg`;
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        
        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-2 sm:mb-3">
          {product.category}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price}</span>
        </div>
      </div>
      
      <div className="flex gap-2 sm:gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.preventDefault()
            addToCart(product)
          }}
          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105 active:scale-95"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          Add to Cart
        </button>
        <button 
          onClick={(e) => e.preventDefault()}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
      </div>
    </Link>
  )
}

export default ProductCard;


