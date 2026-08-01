import React from "react";
import {
  CreditCard,
  Smartphone,
  Landmark,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
  paymentData,
  setPaymentData,
}) => {
  const handleChange = (field, value) => {
    setPaymentData({
      ...paymentData,
      [field]: value,
    });
  };

  return (
    <div className="mt-8">

      <div className="flex items-center gap-2 mb-6">
        <ShieldCheck className="text-green-600" />
        <h2 className="text-2xl font-bold">
          Secure Payment
        </h2>
      </div>

      <p className="text-gray-500 mb-8">
        All transactions are secured with SSL Encryption.
      </p>

      {/* CARD */}

      <div
        className={`border rounded-2xl p-5 mb-5 cursor-pointer transition ${
          paymentMethod === "card"
            ? "border-yellow-500 bg-yellow-50"
            : ""
        }`}
      >
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <CreditCard className="text-yellow-600" />

          <span className="font-semibold text-lg">
            Debit / Credit Card
          </span>
        </label>

        {paymentMethod === "card" && (
          <div className="mt-5 space-y-4">

            <input
              placeholder="Card Holder Name"
              className="w-full border rounded-xl p-3"
              value={paymentData.cardHolder || ""}
              onChange={(e) =>
                handleChange("cardHolder", e.target.value)
              }
            />

            <input
              placeholder="Card Number"
              className="w-full border rounded-xl p-3"
              value={paymentData.cardNumber}
              onChange={(e) =>
                handleChange("cardNumber", e.target.value)
              }
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="MM/YY"
                className="border rounded-xl p-3"
                value={paymentData.expiry}
                onChange={(e) =>
                  handleChange("expiry", e.target.value)
                }
              />

              <input
                placeholder="CVV"
                className="border rounded-xl p-3"
                value={paymentData.cvv}
                onChange={(e) =>
                  handleChange("cvv", e.target.value)
                }
              />

            </div>

            <div className="flex gap-3 mt-3">
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="w-10"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                alt="MasterCard"
                className="w-10"
              />
              <img
                src="https://img.icons8.com/color/48/rupay.png"
                alt="RuPay"
                className="w-10"
              />
            </div>

          </div>
        )}
      </div>

      {/* UPI */}

      <div
        className={`border rounded-2xl p-5 mb-5 ${
          paymentMethod === "upi"
            ? "border-yellow-500 bg-yellow-50"
            : ""
        }`}
      >
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <Smartphone className="text-green-600" />

          <span className="font-semibold text-lg">
            UPI Payment
          </span>
        </label>

        {paymentMethod === "upi" && (
          <div className="mt-5">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">

              {[
                "Google Pay",
                "PhonePe",
                "Paytm",
                "Amazon Pay",
              ].map((app) => (
                <button
                  type="button"
                  key={app}
                  className="border rounded-xl p-3 hover:bg-yellow-100"
                >
                  {app}
                </button>
              ))}

            </div>

            <input
              className="w-full border rounded-xl p-3"
              placeholder="Enter UPI ID (example@upi)"
              value={paymentData.upi}
              onChange={(e) =>
                handleChange("upi", e.target.value)
              }
            />

          </div>
        )}
      </div>

      {/* NET BANKING */}

      <div
        className={`border rounded-2xl p-5 mb-5 ${
          paymentMethod === "netbanking"
            ? "border-yellow-500 bg-yellow-50"
            : ""
        }`}
      >
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="netbanking"
            checked={paymentMethod === "netbanking"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <Landmark className="text-blue-600" />

          <span className="font-semibold text-lg">
            Net Banking
          </span>
        </label>

        {paymentMethod === "netbanking" && (
          <select
            className="w-full border rounded-xl p-3 mt-5"
            value={paymentData.bank}
            onChange={(e) =>
              handleChange("bank", e.target.value)
            }
          >
            <option>Select Bank</option>

            <option>SBI</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>Axis Bank</option>
            <option>Punjab National Bank</option>
            <option>Bank of Baroda</option>
            <option>Canara Bank</option>
            <option>Kotak Mahindra</option>

          </select>
        )}
      </div>

      {/* COD */}

      <div
        className={`border rounded-2xl p-5 ${
          paymentMethod === "cod"
            ? "border-yellow-500 bg-yellow-50"
            : ""
        }`}
      >
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <Wallet className="text-orange-600" />

          <span className="font-semibold text-lg">
            Cash On Delivery
          </span>
        </label>

        {paymentMethod === "cod" && (
          <div className="mt-5 bg-orange-100 rounded-xl p-4">

            <p className="font-semibold">
              Pay when your order is delivered.
            </p>

            <p className="text-gray-600 mt-2">
              ✔ No Advance Payment Required
            </p>

            <p className="text-gray-600">
              ✔ Free Shipping
            </p>

            <p className="text-gray-600">
              ✔ Delivery in 3-5 Business Days
            </p>

          </div>
        )}
      </div>

      <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-600" />
          <span className="font-semibold">
            100% Secure Checkout
          </span>
        </div>

        <p className="text-gray-600 mt-2 text-sm">
          Your payment information is encrypted and processed securely.
        </p>
      </div>

    </div>
  );
};

export default PaymentMethod;