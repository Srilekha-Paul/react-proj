import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import About from "./About";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <ProductList />
      </section>

      {/* About Section */}
      <About />

      {/* Reviews Section */}
      <Reviews />
      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default Home;

