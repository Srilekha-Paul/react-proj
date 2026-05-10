import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-90"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80 z-10" />

      {/* Hero Content */}
      <div className="container mx-auto text-center relative z-20 px-6 md:px-12">

        <div className="max-w-6xl mx-auto py-20">

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-8 leading-none drop-shadow-2xl">

            <span>Luxury</span>

            <span className="block text-yellow-400 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              Jewels
            </span>

          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">

            Timeless elegance handcrafted for the modern woman.
            Exquisite jewelry that tells your story.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">

            {/* Shop Button */}
            <Link
              to="/shop"
              className="group relative inline-flex items-center gap-3 text-lg px-12 py-5 bg-white/10 backdrop-blur-xl hover:bg-white/20 border-2 border-white/30 rounded-3xl font-bold text-white shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              <span>Shop Collection</span>

              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Learn More */}
            <Link
              to="/about"
              className="group font-bold text-white/90 hover:text-white transition-all duration-500 flex items-center gap-3 hover:scale-110"
            >
              Learn More

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.665z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white/80 text-center">

            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                500+
              </div>

              <div className="text-sm uppercase tracking-wider">
                Pieces
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                10K+
              </div>

              <div className="text-sm uppercase tracking-wider">
                Happy Customers
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                5★
              </div>

              <div className="text-sm uppercase tracking-wider">
                Rating
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">

          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>

        </div>

      </div>
    </section>
  );
};

export default Hero;



