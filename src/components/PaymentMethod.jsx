import { CreditCard, QrCode, Building, Banknote } from "lucide-react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod, paymentData, setPaymentData }) => {
  const handleInputChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const methods = [
    { id: "card", label: "Credit / Debit Card", icon: CreditCard },
    { id: "upi", label: "UPI (Google Pay, PhonePe)", icon: QrCode },
    { id: "netbanking", label: "Net Banking", icon: Building },
    { id: "cod", label: "Cash on Delivery", icon: Banknote },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Select Payment Method</h3>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {methods.map((method) => {
          const Icon = method.icon;
          const isSelected = paymentMethod === method.id;
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setPaymentMethod(method.id)}
              className={`flex items-center p-3.5 sm:p-4 border rounded-2xl transition-all duration-200 text-left ${
                isSelected
                  ? "border-yellow-500 bg-yellow-50/50 shadow-md font-semibold text-yellow-800"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 ${isSelected ? "text-yellow-600" : "text-gray-400"}`} />
              <span className="text-xs sm:text-sm md:text-base font-medium">{method.label}</span>
            </button>
          );
        })}
      </div>


      {/* Form details per selected payment method */}
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-4">
        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9101 1121"
                value={paymentData.cardNumber || ""}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={paymentData.expiry || ""}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  placeholder="123"
                  maxLength={4}
                  value={paymentData.cvv || ""}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter UPI ID / VPA</label>
              <input
                type="text"
                name="upi"
                placeholder="username@gpay / username@upi"
                value={paymentData.upi || ""}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <p className="text-xs text-gray-500 mt-2">
                A payment request will be sent to your UPI app.
              </p>
            </div>
          </div>
        )}

        {paymentMethod === "netbanking" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank</label>
              <select
                name="bank"
                value={paymentData.bank || ""}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">-- Choose Your Bank --</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="SBI">State Bank of India (SBI)</option>
                <option value="AXIS">Axis Bank</option>
                <option value="KOTAK">Kotak Mahindra Bank</option>
              </select>
            </div>
          </div>
        )}

        {paymentMethod === "cod" && (
          <div className="text-center py-4 text-gray-700">
            <p className="font-semibold text-lg text-gray-900 mb-1">Cash on Delivery Selected</p>
            <p className="text-sm text-gray-600">
              Pay in cash or via UPI to the delivery executive when your luxury order arrives at your doorstep.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
