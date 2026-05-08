import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      <div className="relative overflow-hidden bg-gray-50 h-80">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">${product.price}</p>
        
        <div className="flex gap-2">
          {!product.inStock ? (
            <span className="flex-1 text-center py-3 px-4 bg-gray-100 text-gray-500 rounded-xl font-medium">
              Out of Stock
            </span>
          ) : (
            <>
              <Link
                to={`/product/${product.id}`}
                className="flex-1 text-center py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors"
              >
                View Details
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="w-12 h-12 bg-gold-600 hover:bg-gold-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard