import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.jpg";
import { toast } from "sonner";
import {
  useLoginMutation,
  useSendForgotOtpMutation,
  useResetPasswordSubmitMutation,
} from "../../feature/auth/authApiSlice";
import { AlertCircle, KeyRound, Mail, Lock, CheckCircle2, X } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [sendForgotOtp, { isLoading: isSendingOtp }] = useSendForgotOtpMutation();
  const [resetPasswordSubmit, { isLoading: isResetting }] = useResetPasswordSubmitMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  // Forgot / Reset Password Modal State
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [resetStep, setResetStep] = useState(1); // 1: Send OTP, 2: Reset Password
  const [resetEmail, setResetEmail] = useState("");
  const [resetOtp, setResetOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpHint, setOtpHint] = useState("");
  const [resetErrorMsg, setResetErrorMsg] = useState("");

  const handleChange = (e) => {
    setErrorMsg("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanEmail = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!cleanEmail || !password) {
      setErrorMsg("Please fill in both email and password.");
      return;
    }

    try {
      const response = await login({
        email: cleanEmail,
        password,
      }).unwrap();

      const user = response?.data;

      toast.success(`Welcome back, ${user?.name || "User"}!`);

      if (!user?.email_verified) {
        navigate("/verify-otp");
        return;
      }

      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);

      const message =
        error?.data?.message ||
        error?.data?.errors?.[0]?.message ||
        "Incorrect email or password. Please check your details or Reset Password below.";

      setErrorMsg(message);
      toast.error(message);
    }
  };

  // Step 1: Open Modal & Request Password Reset OTP
  const handleOpenForgotModal = async () => {
    setIsForgotModalOpen(true);
    setResetStep(1);
    setResetErrorMsg("");
    setOtpHint("");
    setResetEmail(formData.email.trim().toLowerCase());
  };

  const handleSendResetOtp = async (e) => {
    e.preventDefault();
    setResetErrorMsg("");
    setOtpHint("");

    if (!resetEmail) {
      setResetErrorMsg("Please enter your registered email address.");
      return;
    }

    try {
      const res = await sendForgotOtp({ email: resetEmail }).unwrap();
      if (res?.data?.otpHint) {
        setOtpHint(res.data.otpHint);
      }
      toast.success(res?.message || "Password reset OTP sent to your email!");
      setResetStep(2);
    } catch (err) {
      console.error("Forgot password error:", err);
      setResetErrorMsg(
        err?.data?.message || "Failed to send reset OTP. Please ensure this email is registered."
      );
    }
  };

  // Step 2: Submit New Password & Verification OTP
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    setResetErrorMsg("");

    if (!resetOtp || !newPassword) {
      setResetErrorMsg("Please enter both the OTP code and your new password.");
      return;
    }

    try {
      const res = await resetPasswordSubmit({
        email: resetEmail,
        otp: resetOtp,
        newPassword,
      }).unwrap();

      toast.success(res?.message || "Password updated successfully! Please login.");
      setIsForgotModalOpen(false);
      setFormData((prev) => ({ ...prev, email: resetEmail, password: newPassword }));
    } catch (err) {
      console.error("Reset password submission error:", err);
      setResetErrorMsg(
        err?.data?.message || "Invalid OTP code or password reset failed. Please try again."
      );
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl mx-4 my-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2 sm:mb-3">
            Welcome Back
          </h1>

          <p className="text-white/70 text-sm sm:text-base">
            Login to continue your luxury experience
          </p>
        </div>


        {errorMsg && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-200 text-sm flex items-center gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
            <div className="flex-1">
              <span>{errorMsg}</span>
              <button
                type="button"
                onClick={handleOpenForgotModal}
                className="block text-yellow-300 hover:underline font-semibold mt-1 text-xs"
              >
                Need to reset your password? Click here →
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white/80 text-sm mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white/80 text-sm block">
                Password
              </label>
              <button
                type="button"
                onClick={handleOpenForgotModal}
                className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-yellow-400 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-black font-bold text-lg transition-all hover:scale-[1.02] shadow-lg"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-white/70 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 hover:text-yellow-300 font-semibold underline underline-offset-4"
          >
            Register Now
          </Link>
        </p>
      </div>

      {/* Forgot / Reset Password Modal */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-yellow-500/30">
            <button
              onClick={() => setIsForgotModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-yellow-200">
              <KeyRound className="w-8 h-8 text-yellow-600" />
            </div>

            <h2 className="text-2xl font-bold font-serif text-center text-gray-900 mb-1">
              Reset Your Password
            </h2>
            <p className="text-xs text-gray-500 text-center mb-6">
              {resetStep === 1
                ? "Enter your email to receive a password reset verification code."
                : `Enter the 6-digit code sent to ${resetEmail} and your new password.`}
            </p>

            {resetErrorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
                <span>{resetErrorMsg}</span>
              </div>
            )}

            {otpHint && resetStep === 2 && (
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-300 rounded-2xl text-center text-xs text-yellow-900">
                <span className="font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 inline" /> Test Verification OTP:
                </span>
                <span className="text-lg font-mono font-bold tracking-widest text-yellow-700 block mt-0.5">
                  {otpHint}
                </span>
              </div>
            )}

            {resetStep === 1 ? (
              <form onSubmit={handleSendResetOtp} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 uppercase mb-1 block">
                    Registered Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition shadow"
                >
                  {isSendingOtp ? "Sending Reset OTP..." : "Send Verification OTP"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 uppercase mb-1 block">
                    6-Digit Verification OTP
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={6}
                      value={resetOtp}
                      onChange={(e) => setResetOtp(e.target.value.replace(/\D/g, ""))}
                      placeholder="• • • • • •"
                      required
                      className="w-full text-center text-2xl font-mono tracking-widest py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50 font-bold"
                    />
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 uppercase mb-1 block">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password (min 6 chars)"
                      required
                      minLength={6}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                    <KeyRound className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isResetting || resetOtp.length < 6}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition shadow"
                >
                  {isResetting ? "Updating Password..." : "Reset & Set New Password"}
                </button>

                <button
                  type="button"
                  onClick={() => setResetStep(1)}
                  className="w-full text-xs text-gray-500 hover:text-gray-800 text-center block pt-1"
                >
                  ← Change Email Address
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;