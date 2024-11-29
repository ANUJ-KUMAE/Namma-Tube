import React from "react";

const Hero = () => {
  // Create a list of data
  const locations = ["Sweden", "Monaco", "Delaware", "Springfield", "Umbrella"];

  return (
    <div className="h-screen flex items-center justify-between px-16 relative">
      {/* Scrolling List Above */}
      <div className="overflow-hidden w-full absolute top-0 left-0">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Render the list using map */}

          {locations.map((location, index) => (
            <div key={index} className="mx-4 text-2xl font-semibold text-black">
              {location}
            </div>
          ))}

          {/* Repeat the list for continuous scroll */}
          {locations.map((location, index) => (
            <div
              key={`repeat-${index}`}
              className="mx-4 text-2xl font-semibold text-black"
            >
              {location}
            </div>
          ))}
        </div>
      </div>

      {/* Left Side - Focused on Your Goals */}
      <div className="flex-1 text-left z-10">
        <div className="text-black text-[4rem] font-extrabold leading-tight">
          FOCUSED ON <br /> YOUR GOALS
        </div>
      </div>

      {/* Right Side - Description and Button */}
      <div className="flex-1 text-left text-gray-700 text-lg mt-10">
        <p>
          We specialize in crafting tailored{" "}
          <span className="font-bold">marketing</span> strategies that are as
          unique as your brand. From developing targeted social media campaigns
          to optimizing your online presence, we use a mix of creativity and
          strategic insights to elevate your brand to the next level.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-pink-500 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300"
        >
          ABOUT US →
        </a>
      </div>
    </div>
  );
};

export default Hero;
