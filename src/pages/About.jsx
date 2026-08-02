import heroBg from "../assets/images/hero-bg.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#fdf8f3] min-h-screen py-12 sm:py-20 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={heroBg}
            alt="Luxury Jewelry"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/hero-bg.jpg";
            }}
            className="w-full h-64 sm:h-96 md:h-[550px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div>

          {/* Small Heading */}
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">
            About Us
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 font-serif">
            Timeless Luxury Crafted With Elegance
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            We create premium handcrafted jewelry designed for elegance,
            beauty, and confidence. Every collection reflects luxury and
            timeless fashion with modern craftsmanship.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            From elegant necklaces to luxury earrings and bracelets,
            our jewelry is made to make every moment unforgettable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500">
                10+
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500">
                5K+
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
                Happy Customers
              </p>
            </div>

          </div>

          {/* Button */}
          <Link
            to="/shop"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-lg hover:scale-105 text-center"
          >
            Explore Collection
          </Link>

        </div>
      </div>
    </section>
  );
};

export default About;