import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { products } from '../data/products.js'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/shop" className="text-yellow-500 hover:underline">Back to shop</Link>
        </div>
      </div>
    )
  }

  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 sm:mb-8 font-medium text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to {product.category}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Images */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl p-4 sm:p-6 h-64 sm:h-96 lg:h-[500px] flex items-center justify-center border border-gray-100 shadow-inner">
              <img 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `/assets/images/product${product.id}.jpg`;
                }}
                className="max-h-full max-w-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              {product.category}
            </span>
            
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-6">
              {product.name}
            </h1>
            
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">${product.price}</div>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {product.description}
            </p>

            {!product.inStock ? (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-6 font-semibold text-center">
                Out of Stock
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-base sm:text-lg font-semibold flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Add to Cart</span>
              </button>
            )}

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Product Guarantees</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li>• Free shipping on orders over $200</li>
                <li>• 30-day return policy</li>
                <li>• Lifetime warranty</li>
                <li>• Gift wrapping available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail;