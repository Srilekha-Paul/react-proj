import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "sonner";

import heroBg from "../../assets/images/hero-bg.jpg";

import { useRegisterMutation } from "../../feature/auth/authApiSlice";

const Register = () => {
  const navigate = useNavigate();

  const [register, { isLoading }] =
    useRegisterMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email,
      )
    ) {
      newErrors.email =
        "Enter valid email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^[6-9]\d{9}$/.test(
        formData.phone,
      )
    ) {
      newErrors.phone =
        "Enter valid 10 digit phone";
    }

    // Password
    if (!formData.password.trim()) {
      newErrors.password =
        "Password is required";
    } else if (
      formData.password.length < 6
    ) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors)
      .length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    try {
      await register(formData).unwrap();

      toast.success(
        "Account created successfully",
      );

      navigate("/verify-otp");
    } catch (error) {
      console.log(error);

      const message =
        error?.data?.errors?.[0]
          ?.message ||
        error?.data?.message ||
        "Registration failed";

      toast.error(message);
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

      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-serif font-bold text-white mb-3">
            Create Account
          </h1>

          <p className="text-white/70">
            Join the world of timeless luxury
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-5 py-4 rounded-2xl bg-white/10 border text-white placeholder:text-white/40 outline-none focus:border-yellow-400 ${
                errors.name
                  ? "border-red-500"
                  : "border-white/20"
              }`}
            />

            {errors.name && (
              <p className="text-red-400 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full px-5 py-4 rounded-2xl bg-white/10 border text-white placeholder:text-white/40 outline-none focus:border-yellow-400 ${
                errors.email
                  ? "border-red-500"
                  : "border-white/20"
              }`}
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full px-5 py-4 rounded-2xl bg-white/10 border text-white placeholder:text-white/40 outline-none focus:border-yellow-400 ${
                errors.phone
                  ? "border-red-500"
                  : "border-white/20"
              }`}
            />

            {errors.phone && (
              <p className="text-red-400 text-sm mt-2">
                {errors.phone}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-5 py-4 rounded-2xl bg-white/10 border text-white placeholder:text-white/40 outline-none focus:border-yellow-400 ${
                errors.password
                  ? "border-red-500"
                  : "border-white/20"
              }`}
            />

            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg transition-all hover:scale-[1.02]"
          >
            {isLoading
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

        <p className="text-center text-white/70 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-yellow-400 hover:text-yellow-300 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Register;