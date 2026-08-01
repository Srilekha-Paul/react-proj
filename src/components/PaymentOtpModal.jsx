import { useState, useEffect } from "react";
import { ShieldCheck, Lock, Mail, Smartphone, RefreshCw, X, AlertCircle, CheckCircle2 } from "lucide-react";

const PaymentOtpModal = ({
  isOpen,
  onClose,
  email,
  phone,
  amount,
  paymentMethod,
  onVerifyOtp,
  onResendOtp,
  isLoading,
  errorMsg,
  otpHint,
}) => {
  const [otp, setOtp] = useState("");
  const [channel, setChannel] = useState("email"); // "email" or "sms"
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  const handleChannelSwitch = (newChannel) => {
    setChannel(newChannel);
    setTimer(60);
    setCanResend(false);
    onResendOtp(newChannel);
  };

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    onResendOtp(channel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 6) return;
    onVerifyOtp(otp);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative border border-yellow-500/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-yellow-200">
          <ShieldCheck className="w-9 h-9 text-yellow-600" />
        </div>

        <h2 className="text-2xl font-bold font-serif text-center text-gray-900 mb-1">
          3D-Secure Payment Verification
        </h2>
        <p className="text-xs uppercase tracking-wider font-semibold text-yellow-600 text-center mb-4">
          Multi-Channel Two-Factor Authorization
        </p>

        {/* Channel Selector Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-2xl mb-5">
          <button
            type="button"
            onClick={() => handleChannelSwitch("email")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-1.5 transition ${
              channel === "email"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Mail className="w-4 h-4 text-yellow-500" /> Email OTP
          </button>
          <button
            type="button"
            onClick={() => handleChannelSwitch("sms")}
            className={`flex-1 py-2 px-3 rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-1.5 transition ${
              channel === "sms"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Smartphone className="w-4 h-4 text-yellow-500" /> Mobile SMS OTP
          </button>
        </div>

        {/* Amount Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3.5 mb-5 text-center">
          <p className="text-xs text-gray-500 font-medium uppercase">Authorizing Payment</p>
          <p className="text-3xl font-bold text-gray-900 my-0.5">${Number(amount || 0).toFixed(2)}</p>
          <p className="text-xs font-semibold text-gray-600 uppercase">
            Method: <span className="text-yellow-600">{paymentMethod}</span>
          </p>
        </div>

        {/* Info Text */}
        <p className="text-xs md:text-sm text-gray-600 text-center mb-4 leading-relaxed">
          {channel === "email" ? (
            <>
              OTP sent to your email: <strong className="text-gray-900 block mt-0.5">{email}</strong>
            </>
          ) : (
            <>
              OTP sent via SMS to mobile: <strong className="text-gray-900 block mt-0.5">{phone || "Your Registered Mobile"}</strong>
            </>
          )}
        </p>

        {/* Development / Test OTP Fallback Hint */}
        {otpHint && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-300 rounded-2xl text-center text-xs text-yellow-900">
            <span className="font-bold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-yellow-600 inline" /> Test Verification OTP:
            </span>
            <span className="text-lg font-mono font-bold tracking-widest text-yellow-700 block mt-0.5">
              {otpHint}
            </span>
          </div>
        )}

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="relative">
              <input
                type="text"
                maxLength={6}
                placeholder="• • • • • •"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                required
                className="w-full text-center text-3xl font-mono tracking-[12px] py-3.5 border-2 border-gray-300 rounded-2xl focus:border-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500/20 bg-gray-50 font-bold"
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.length < 6}
            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-semibold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span>Verifying Code...</span>
            ) : (
              <span>Verify & Authorize Payment</span>
            )}
          </button>
        </form>

        {/* Resend Timer */}
        <div className="mt-5 text-center text-xs text-gray-500">
          {!canResend ? (
            <p>
              Resend code in <strong className="text-yellow-600">{timer}s</strong>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold gap-1 hover:underline"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Resend OTP via {channel === "sms" ? "SMS" : "Email"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentOtpModal;
