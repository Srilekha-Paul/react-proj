import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'
import { ShoppingCart, Trash2 } from 'lucide-react'

const CartPage = () => {
  const { cart, totalPrice, clearCart, totalItems } = useCart()

  return (
    <section className="py-12 sm:py-24 bg-[#f8f5f0] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mb-2 sm:mb-4">
            Shopping Cart
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            {totalItems === 0 ? 'Your cart is empty' : `${totalItems} items in your cart`}
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl text-center py-16 px-6 max-w-lg mx-auto">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-yellow-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-200">
              <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 text-sm sm:text-base">Looks like you haven't added any luxury pieces yet.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-base sm:text-lg font-semibold rounded-2xl text-white transition-all duration-300 shadow-md hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6 border border-gray-100">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8 sticky bottom-4 border border-yellow-500/20">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl sm:text-2xl font-semibold text-gray-900">Total Amount:</span>
                <span className="text-3xl sm:text-4xl font-bold text-yellow-600">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 flex items-center justify-center py-3.5 sm:py-4 px-6 border border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-colors text-base"
                >
                  <Trash2 className="w-5 h-5 mr-2 text-gray-500" />
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3.5 sm:py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base"
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