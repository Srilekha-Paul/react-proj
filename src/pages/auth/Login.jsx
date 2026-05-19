import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.jpg";
import { toast } from "sonner";
import { useLoginMutation } from "../../feature/auth/authApiSlice";

const Login = () => {
  const navigate = useNavigate();

  const [login, { isLoading }] =
    useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      const user =
        response?.data;

      if (!user?.email_verified) {
        navigate("/verify-otp");
        return;
      }

      navigate("/");
    } catch (error) {
      console.log(error);

      const message =
        error?.data?.errors?.[0]?.message ||
        error?.data?.message ||
        "Login failed";

      toast.error(message);
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
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-serif font-bold text-white mb-3">
            Welcome Back
          </h1>

          <p className="text-white/70">
            Login to continue your luxury experience
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

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
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-yellow-400"
            />

          </div>

          <div>

            <label className="text-white/80 text-sm mb-2 block">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-yellow-400"
            />

          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg transition-all hover:scale-[1.02]"
          >
            {isLoading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <p className="text-center text-white/70 mt-8">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-yellow-400 hover:text-yellow-300 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;