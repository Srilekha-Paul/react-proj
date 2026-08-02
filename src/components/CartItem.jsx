import { useCart } from '../context/CartContext.jsx'
import { Trash2, Minus, Plus } from 'lucide-react'

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart()

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b last:border-b-0">
      <div className="flex items-center gap-4 min-w-0">
        <img 
          src={item.image} 
          alt={item.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `/assets/images/product${item.id}.jpg`;
          }}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-gray-100 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{item.name}</h3>
          <p className="text-base sm:text-lg font-bold text-yellow-600">${item.price}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 active:scale-95 transition"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4 text-gray-700" />
          </button>
          <span className="w-8 text-center font-bold text-gray-900">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 active:scale-95 transition"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default CartItem;