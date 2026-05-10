const About = () => {
  return (
    <section
      id="about"
      className="bg-[#fdf8f3] min-h-screen py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/src/assets/images/hero-bg.jpg"
            alt="Luxury Jewelry"
            className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div>

          {/* Small Heading */}
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold mb-4">
            About Us
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Timeless Luxury Crafted With Elegance
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We create premium handcrafted jewelry designed for elegance,
            beauty, and confidence. Every collection reflects luxury and
            timeless fashion with modern craftsmanship.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From elegant necklaces to luxury earrings and bracelets,
            our jewelry is made to make every moment unforgettable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-4xl font-bold text-yellow-500">
                10+
              </h2>

              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-4xl font-bold text-yellow-500">
                5K+
              </h2>

              <p className="text-gray-600 mt-2">
                Happy Customers
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:scale-105">
            Explore Collection
          </button>

        </div>
      </div>
    </section>
  );
};

export default About;