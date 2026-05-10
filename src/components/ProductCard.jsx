import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 hover:-translate-y-2 transition-all duration-300 border hover:border-yellow-200">
      <div className="w-full h-64 bg-gray-100 rounded-2xl mb-6 overflow-hidden group-hover:bg-gradient-to-t group-hover:from-yellow-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      <div>
        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-3">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
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
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105"
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

export default ProductCard;

