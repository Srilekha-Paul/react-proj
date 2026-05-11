const reviews = [
  {
    id: 1,
    name: "Sophia Williams",
    review:
      "Absolutely stunning jewelry! The quality exceeded my expectations and the packaging felt truly luxurious.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Johnson",
    review:
      "I purchased a necklace for my anniversary and it was perfect. Elegant design and amazing craftsmanship.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Brown",
    review:
      "Fast delivery and premium quality products. I receive compliments every time I wear their jewelry.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ava Martinez",
    review:
      "Luxury Jewels has become my favorite jewelry store online. Beautiful collections and excellent service.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#f8f5f0] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold mb-4">
            Reviews
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Thousands of happy customers trust Luxury Jewels for timeless,
            elegant, and premium jewelry collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-8 mb-6">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Reviews;