const questions = [
  {
    id: 1,
    question: "Do you provide free shipping?",
    answer:
      "Yes, we provide free worldwide shipping on all premium jewelry orders.",
  },
  {
    id: 2,
    question: "Are your jewelry products authentic?",
    answer:
      "Absolutely. All our jewelry pieces are crafted with premium quality materials and certified stones.",
  },
  {
    id: 3,
    question: "Can I return a product after purchase?",
    answer:
      "Yes, we offer a 14-day return and exchange policy for unused products.",
  },
  {
    id: 4,
    question: "How long does delivery take?",
    answer:
      "Standard delivery usually takes 3-7 business days depending on your location.",
  },
  {
    id: 5,
    question: "Do you offer custom jewelry designs?",
    answer:
      "Yes, we create custom luxury jewelry designs based on customer preferences.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold mb-4">
            FAQ
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about our jewelry,
            delivery, returns, and services.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-6">

          {questions.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8f5f0] p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.question}
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                {item.answer}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ;