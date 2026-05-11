import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import {
  CreditCard,
  MapPin,
  Mail,
  Truck,
} from "lucide-react";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();

      navigate("/success");
    }, 2000);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-[#f8f5f0] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Checkout
          </h1>

          <p className="text-gray-600 text-lg">
            Complete your luxury jewelry purchase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-yellow-500" />
                  Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-4 border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-4 border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-yellow-500" />
                  Shipping Address
                </h3>

                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <div className="grid md:grid-cols-3 gap-4 mt-4">

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />

                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />

                </div>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <CreditCard className="w-6 h-6 mr-3 text-yellow-500" />
                  Payment Details
                </h3>

                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <div className="grid grid-cols-2 gap-4 mt-4">

                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />

                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />

                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-5 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Truck className="w-6 h-6" />

                {loading
                  ? "Processing Order..."
                  : `Place Order - $${totalPrice.toFixed(2)}`}
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-2xl"
                      />

                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                    </div>

                    <p className="font-bold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

              </div>

              {/* Total */}
              <div className="mt-8 border-t pt-6">

                <div className="flex justify-between mb-4 text-lg">
                  <span>Subtotal</span>

                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-4 text-lg">
                  <span>Shipping</span>

                  <span>Free</span>
                </div>

                <div className="flex justify-between text-3xl font-bold mt-6">
                  <span>Total</span>

                  <span>${totalPrice.toFixed(2)}</span>
                </div>

              </div>
            </div>

            {/* Return Button */}
            <Link
              to="/cart"
              className="block w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl text-center font-semibold transition"
            >
              ← Return to Cart
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;