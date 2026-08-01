import { Link, useLocation } from "react-router-dom";
import { CheckCircle, Mail, Package, QrCode } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const state = location.state || {};

  const orderNumber = state.orderNumber || "#LJ-" + Math.floor(100000 + Math.random() * 900000);
  const trackingId = state.trackingId || "N/A";
  const email = state.email || "your registered email";
  const totalAmount = state.totalAmount;
  const paymentMethod = state.paymentMethod || "cod";
  const upiId = state.upiId;

  return (
    <section className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-14 h-14 text-green-600" />
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Thank you for shopping with Luxury Jewelry. Your order has been placed successfully and is being prepared for dispatch.
        </p>

        {/* UPI Request Notice if paymentMethod is UPI */}
        {paymentMethod === "upi" && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 text-left flex items-start gap-3 text-blue-900 text-sm md:text-base">
            <QrCode className="w-6 h-6 flex-shrink-0 text-blue-600 mt-0.5" />
            <div>
              <p className="font-bold text-blue-950">UPI Collect Request Initiated</p>
              <p className="text-sm text-blue-800 mt-1">
                A payment request for <strong>${Number(totalAmount).toFixed(2)}</strong> has been sent to your UPI VPA ({upiId || "your UPI app"}). Please open Google Pay, PhonePe, or BHIM to authorize payment.
              </p>
            </div>
          </div>
        )}

        {/* Email Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-8 flex items-center justify-center gap-3 text-yellow-800 text-sm md:text-base">
          <Mail className="w-5 h-5 flex-shrink-0 text-yellow-600" />
          <span>A payment confirmation email & detailed bill invoice has been sent to <strong>{email}</strong>.</span>
        </div>

        {/* Order Info Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 text-left space-y-3">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 text-sm font-medium">Order Number:</span>
            <span className="text-xl font-bold text-yellow-600">{orderNumber}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 text-sm font-medium">Payment Method:</span>
            <span className="text-sm font-semibold uppercase text-gray-800">{paymentMethod}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-600 text-sm font-medium">Tracking ID:</span>
            <span className="text-sm font-mono font-semibold text-gray-800">{trackingId}</span>
          </div>

          {totalAmount && (
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-600 text-sm font-medium">Total Amount:</span>
              <span className="text-xl font-bold text-gray-900">${Number(totalAmount).toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/orders?trackingId=${trackingId}`}
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-md"
          >
            <Package className="w-5 h-5" />
            Track Order
          </Link>

          <Link
            to="/shop"
            className="flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;