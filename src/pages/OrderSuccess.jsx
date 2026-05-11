import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">

        {/* Success Icon */}
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-20 h-20 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Order Confirmed!
        </h1>

        <p className="text-xl text-gray-600 leading-8 mb-10">
          Thank you for shopping with Luxury Jewelry.
          Your order has been placed successfully and
          will be shipped soon.
        </p>

        {/* Order Info */}
        <div className="bg-gray-100 rounded-2xl p-6 mb-10">
          <p className="text-lg text-gray-700 mb-2">
            Order Number
          </p>

          <h2 className="text-3xl font-bold text-yellow-600">
            #LJ2025
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <Link
            to="/shop"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Back to Home
          </Link>

        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;