import React, { useEffect, useRef, useState } from "react";
import caseStudies from "../data/caseStudies";

const CaseStudies = () => {
  const [inView, setInView] = useState(Array(caseStudies.length).fill(false)); // To track if images are in view
  const imageRefs = useRef([]);

  // Set up the intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prevInView) => {
              const updated = [...prevInView];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    // Observe all images
    imageRefs.current.forEach((image) => observer.observe(image));

    return () => observer.disconnect(); // Clean up on component unmount
  }, []);

  return (
    <section className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
      <div className="flex flex-col items-center gap-6 px-8">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            ref={(el) => (imageRefs.current[index] = el)} // Attach reference to each image div
            className={`p-6 ${
              caseStudy.bgColor
            } text-white rounded-lg w-full opacity-0 transition-opacity duration-1000 ${
              inView[index] ? "opacity-100" : "" // Fade in when in view
            }`}
          >
            {inView[index] && (
              <>
                {/* Title inside normal flow, no absolute positioning */}
                <h3 className="text-xl font-bold mb-4 text-center p-2 bg-opacity-50 bg-black text-white">
                  {caseStudy.title}
                </h3>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-auto rounded-md"
                />
                <a
                  href="#"
                  className="text-pink-400 mt-4 text-center hover:underline block"
                >
                  Click here
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
