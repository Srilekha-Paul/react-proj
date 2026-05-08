import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Timeless Elegance
            <span className="block text-gold-400 text-4xl md:text-6xl">in Every Piece</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our exquisite collection of fine jewelry, crafted with passion and precision 
            for the modern woman who values quality and sophistication.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-12 py-4 bg-gold-600 hover:bg-gold-700 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero