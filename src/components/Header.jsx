import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900 font-serif">
            Luxury Jewels
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-gold-600 font-medium transition-colors ${
                location.pathname === '/' ? 'text-gold-600 border-b-2 border-gold-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`hover:text-gold-600 font-medium transition-colors ${
                location.pathname === '/shop' ? 'text-gold-600 border-b-2 border-gold-600' : ''
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/cart" 
              className={`hover:text-gold-600 font-medium transition-colors ${
                location.pathname === '/cart' ? 'text-gold-600 border-b-2 border-gold-600' : ''
              }`}
            >
              Cart ({totalItems})
            </Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 ml-4">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gold-600" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-gold-600 font-medium">Home</Link>
            <Link to="/shop" className="block py-2 hover:text-gold-600 font-medium">Shop</Link>
            <Link to="/cart" className="block py-2 hover:text-gold-600 font-medium">
              Cart ({totalItems})
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header