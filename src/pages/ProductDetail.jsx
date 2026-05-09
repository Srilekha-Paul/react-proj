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
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/shop" className="text-gold-600 hover:underline">Back to shop</Link>
        </div>
      </div>
    )
  }

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to {product.category}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 h-[500px] flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full mb-4">
              {product.category}
            </span>
            
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              {product.name}
            </h1>
            
            <div className="text-4xl font-bold text-gray-900 mb-8">${product.price}</div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {!product.inStock ? (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-6">
                Out of Stock
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gold-600 hover:bg-gold-700 text-white py-6 px-8 rounded-2xl text-lg font-semibold flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
            )}

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <ul className="space-y-2 text-gray-600">
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