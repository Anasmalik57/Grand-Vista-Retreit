import { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaStar,
  FaUtensilSpoon,
  FaWineGlassAlt,
} from "react-icons/fa";
import { RiReservedLine } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroContent = [
    {
      title: "Mountain View Dining",
      description:
        "Relish delectable dishes with panoramic views of the Himalayan peaks, perfect for a serene and memorable meal.",
      image: "/image1.webp",
      alt: "Mountain view fine dining",
    },
    {
      title: "Authentic Garhwali Cuisine",
      description:
        "Savor the soulful taste of Garhwali dishes, crafted with local spices and traditional recipes passed down generations.",
      image: "/image2.webp",
      alt: "Traditional Garhwali dishes",
    },
    {
      title: "Dinner",
      description:
        "Dine in style with warm, sophisticated interiors that create an inviting ambiance for an unforgettable evening.",
      image: "/image3.webp",
      alt: "Elegant restaurant interior",
    },
    {
      title: "Luxurious Atmosphere",
      description:
        "Immerse yourself in a refined setting with plush decor, designed to make every moment feel special and grand.",
      image: "/image4.webp",
      alt: "Elegant restaurant interior",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="small-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(45, 85, 65, 0.03)"
                strokeWidth="0.5"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#small-grid)"></rect>
        </svg>
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                Mussoorie's Premier Dining Experience
              </div>

              {heroContent.map((content, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    activeSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute"
                  }`}
                  style={{ display: activeSlide === index ? "block" : "none" }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-green-900 leading-tight mb-4">
                    {content.title}
                  </h1>
                  <p className="text-lg text-green-800 md:text-xl mb-8">
                    {content.description}
                  </p>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <button className="bg-green-700 cursor-pointer hover:bg-green-800 text-white flex items-center justify-center px-8 py-3 rounded-md text-base font-medium transition-all duration-200">
                  <RiReservedLine className="mr-2" size={20} />
                  Reserve a Table
                </button>

                <button className="border border-green-700 cursor-pointer hover:bg-green-700 hover:text-white text-green-700 flex items-center justify-center px-8 py-3 rounded-md text-base font-medium transition-all duration-200">
                  <BiSolidFoodMenu className="mr-2" size={20} />
                  Explore Menu
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start mt-12 gap-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaStar className="text-green-500" size={16} />
                  </div>
                  <span className="ml-2 text-green-800">Award Winning</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaUtensilSpoon className="text-green-700" size={16} />
                  </div>
                  <span className="ml-2 text-green-800">Farm to Table</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaWineGlassAlt className="text-purple-700" size={16} />
                  </div>
                  <span className="ml-2 text-green-800">Curated Wines</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                {heroContent.map((content, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={content.image}
                      alt={content.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}

                {/* Image Overlay Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 bg-opacity-50 backdrop-blur-sm rounded-bl-3xl z-10 flex items-center justify-center">
                  <span className="font-serif text-2xl text-green-800 font-bold">
                    GV
                  </span>
                </div>

                {/* Slider Navigation */}
                <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
                  {heroContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 w-${
                        activeSlide === index ? "8" : "2"
                      } rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "bg-white"
                          : "bg-white bg-opacity-50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-200 shadow-md rounded-full hidden lg:block"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-50 rounded-full hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#f0fdf4"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
