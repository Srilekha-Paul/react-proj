import ProductList from '../components/ProductList.jsx'

const Shop = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exquisite jewelry crafted with precision and passion
          </p>
        </div>
        <ProductList />
      </div>
    </div>
  )
}

export default Shop;


