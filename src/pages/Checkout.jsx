import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import PaymentMethod from "../components/PaymentMethod";
import PaymentOtpModal from "../components/PaymentOtpModal";
import {
  useSendPaymentOtpMutation,
  useProcessCheckoutMutation,
} from "@/feature/order/orderApiSlice";
import { useSelector } from "react-redux";
import {
  MapPin,
  Mail,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth?.user);

  const [formData, setFormData] = useState({
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upi: "",
    bank: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [modalErrorMsg, setModalErrorMsg] = useState("");
  const [otpHint, setOtpHint] = useState("");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const [sendPaymentOtp, { isLoading: isSendingOtp }] = useSendPaymentOtpMutation();
  const [processCheckout, { isLoading: isProcessingCheckout }] = useProcessCheckoutMutation();

  const finalTotal = totalPrice + (totalPrice > 200 ? 0 : 15);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Step 1: Handle Initial Form Submit (Send Payment Verification OTP)
  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setModalErrorMsg("");
    setOtpHint("");

    if (cart.length === 0) {
      setErrorMsg("Your cart is empty!");
      return;
    }

    try {
      const response = await sendPaymentOtp({
        email: formData.email,
        phone: formData.phone,
        amount: finalTotal,
        paymentMethod,
        channel: "email",
      }).unwrap();

      if (response?.success) {
        if (response.otpHint) setOtpHint(response.otpHint);
        setIsOtpModalOpen(true);
      }
    } catch (err) {
      console.error("Failed to send Payment OTP:", err);
      setErrorMsg(
        err?.data?.message || "Failed to send Payment Authorization OTP. Please try again."
      );
    }
  };

  // Step 2: Handle Resend OTP via Email or Mobile SMS
  const handleResendOtp = async (channel = "email") => {
    setModalErrorMsg("");
    setOtpHint("");
    try {
      const response = await sendPaymentOtp({
        email: formData.email,
        phone: formData.phone,
        amount: finalTotal,
        paymentMethod,
        channel,
      }).unwrap();
      if (response?.otpHint) setOtpHint(response.otpHint);
    } catch (err) {
      setModalErrorMsg("Failed to resend OTP. Please check connection.");
    }
  };

  // Step 3: Handle Verified OTP Submission (Process Checkout & Order Creation)
  const handleVerifyOtpAndCheckout = async (otpCode) => {
    setModalErrorMsg("");

    try {
      const orderPayload = {
        otp: otpCode,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        shippingAddress: {
          addressLine1: formData.address,
          city: formData.city,
          state: formData.state || formData.city,
          postalCode: formData.zipCode,
          country: formData.country,
        },
        paymentMethod,
        paymentDetails: paymentData,
        items: cart,
      };

      const response = await processCheckout(orderPayload).unwrap();

      if (response?.success) {
        setIsOtpModalOpen(false);
        clearCart();
        navigate("/success", {
          state: {
            orderNumber: response.data?.orderNumber,
            trackingId: response.data?.trackingId,
            totalAmount: response.data?.totalAmount || finalTotal,
            email: formData.email,
            paymentMethod,
            upiId: paymentData.upi,
          },
        });
      }
    } catch (err) {
      console.error("Checkout OTP Verification failed:", err);
      setModalErrorMsg(
        err?.data?.message || "Invalid OTP code. Please check the code sent to your email/mobile."
      );
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f5f0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-serif">
            Checkout & Security Authentication
          </h1>
          <p className="text-gray-600 text-lg">
            3D-Secure Multi-Channel Two-Factor Payment Verification
          </p>
        </div>

        {errorMsg && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form onSubmit={handleInitialSubmit} className="space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-900">
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
                  placeholder="Mobile Phone Number (for Mobile SMS OTP)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-4 border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-900">
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

              {/* Multi-Option Payment */}
              <div>
                <PaymentMethod
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  paymentData={paymentData}
                  setPaymentData={setPaymentData}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSendingOtp || cart.length === 0}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white py-5 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <ShieldCheck className="w-6 h-6" />
                {isSendingOtp
                  ? "Generating Payment Verification OTP..."
                  : `Proceed to Secure Payment - $${finalTotal.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* RIGHT ORDER SUMMARY */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Order Summary</h2>

              <div className="space-y-5 max-h-96 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image || "/placeholder.jpg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-2xl bg-gray-100"
                      />
                      <div>
                        <h3 className="font-semibold text-base text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold text-base text-gray-900">
                      ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-6">
                <div className="flex justify-between mb-4 text-base text-gray-700">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 text-base text-gray-700">
                  <span>Shipping</span>
                  <span>{totalPrice > 200 ? "FREE" : "$15.00"}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold mt-6 text-gray-900">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/cart"
              className="block w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl text-center font-semibold transition"
            >
              ← Return to Cart
            </Link>
          </div>
        </div>
      </div>

      {/* 3D-Secure Payment Verification OTP Modal */}
      <PaymentOtpModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        email={formData.email}
        phone={formData.phone}
        amount={finalTotal}
        paymentMethod={paymentMethod}
        onVerifyOtp={handleVerifyOtpAndCheckout}
        onResendOtp={handleResendOtp}
        isLoading={isProcessingCheckout}
        errorMsg={modalErrorMsg}
        otpHint={otpHint}
      />
    </section>
  );
};

export default Checkout;