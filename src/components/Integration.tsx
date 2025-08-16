import IntegrationImg from "../assets/integrations.png";

const IntegrationSection = () => {
  return (
    <section className="bg-emerald-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seamless Integration, Your Way
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Embed Recyclopedia directly into your municipal waste page or use it
            as a dedicated hosted site — branded to match your community’s look
            and feel. Residents get the same accurate recycling guidance
            wherever they search, making it easier than ever to do the right
            thing.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="">
            <img
              src={IntegrationImg}
              alt="Recyclopedia embedded on a municipal website"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
