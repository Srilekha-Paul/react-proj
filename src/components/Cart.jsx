import { useCart } from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'
import { Link } from 'react-router-dom'

const Cart = ({ isOpen, onClose }) => {
  const { cart, totalPrice, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={onClose}>
      <div 
        className="bg-white w-full md:w-96 h-full shadow-2xl transform transition-transform duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold">Shopping Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1 4.5A2 2 0 007.4 20h9.2a2 2 0 001.4-3.5l-1-4.5" />
                </svg>
              </div>
              <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
              <Link to="/shop" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-xl font-semibold">
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="space-y-3">
              <Link
                to="/checkout"
                className="block w-full bg-gold-600 hover:bg-gold-700 text-white text-center py-4 px-6 rounded-xl font-semibold transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-gray-600 hover:text-gray-800 py-3 px-6 border border-gray-300 rounded-xl font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart