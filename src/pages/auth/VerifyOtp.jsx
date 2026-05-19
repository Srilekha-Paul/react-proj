import { useState } from "react";

import { useNavigate } from "react-router-dom";

import heroBg from "../../assets/images/hero-bg.jpg";
import { toast } from "sonner";
import {
  useVerifyOtpMutation,
  useResendOtpMutation,
} from "../../feature/auth/authApiSlice";
import { useDispatch } from "react-redux";

import { setEmailVerified } from "../../store/slice/authSlice";
const VerifyOtp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const [verifyOtp, { isLoading }] =
    useVerifyOtpMutation();

  const [resendOtp] =
    useResendOtpMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await verifyOtp({
        otp,
      }).unwrap();

     toast.success("Email verified");

      dispatch(setEmailVerified());
      
      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(
        error?.data?.message ||
          "OTP verification failed",
      );
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp().unwrap();

    toast.success("OTP resent successfully");
    } catch (error) {
      console.log(error);

      toast.error(
        error?.data?.message ||
          "Failed to resend OTP",
      );
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-serif font-bold text-white mb-3">
            Verify OTP
          </h1>

          <p className="text-white/70">
            Enter the verification code sent to your email
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
            placeholder="Enter OTP"
            className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white text-center tracking-[10px] text-2xl placeholder:text-white/40 outline-none focus:border-yellow-400"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg transition-all hover:scale-[1.02]"
          >
            {isLoading
              ? "Verifying..."
              : "Verify Account"}
          </button>

        </form>

        <button
          onClick={handleResendOtp}
          className="w-full mt-6 text-yellow-400 hover:text-yellow-300"
        >
          Resend OTP
        </button>

      </div>

    </section>
  );
};

export default VerifyOtp;