import BeforeImg from "../assets/recycling-confusion.png";
import AfterImg from "../assets/recycling-confidence.png";

const RecyclingClaritySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Confusion to Clarity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recyclopedia turns recycling from a guessing game into a simple,
            confident choice — in just seconds.
          </p>
        </div>

        {/* First block: Confusion */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="flex justify-center">
            <img
              src={BeforeImg}
              alt="Confused residents trying to recycle"
              className="w-full h-auto rounded-lg "
            />
          </div>
          {/* Text Right */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              The Guessing Game
            </h3>
            <p className="text-lg text-gray-600">
              Without clear guidance, recycling becomes a frustrating puzzle.
              Residents often throw the wrong items in the wrong bin, hoping for
              the best — and contamination rates stay high.
            </p>
          </div>
        </div>

        {/* Second block: Clarity */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Left */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Clarity in Seconds
            </h3>
            <p className="text-lg text-gray-600">
              With Recyclopedia, residents know exactly where each item goes. In
              just a few clicks, they can recycle with confidence — reducing
              waste, saving resources, and improving community recycling rates.
            </p>
          </div>
          {/* Image Right */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={AfterImg}
              alt="Confident residents recycling correctly"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecyclingClaritySection;
