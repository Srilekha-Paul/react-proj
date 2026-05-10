import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'
import { ShoppingCart, Trash2 } from 'lucide-react'

const CartPage = () => {
  const { cart, totalPrice, clearCart, totalItems } = useCart()

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {totalItems === 0 ? 'Your cart is empty' : `${totalItems} items in your cart`}
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-32 h-32 bg-gray-100 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <ShoppingCart className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <Link 
              to="/shop" 
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-2xl text-white transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 sticky bottom-4">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-semibold text-gray-900">Total:</span>
                <span className="text-4xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 flex items-center justify-center py-4 px-8 border border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Trash2 className="w-5 h-5 mr-2" />
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 rounded-2xl font-semibold text-center transition-all duration-300 hover:shadow-xl flex items-center justify-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CartPage;