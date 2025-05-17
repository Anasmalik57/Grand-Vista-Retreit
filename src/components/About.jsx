import React from "react";
import { FaHistory, FaAward, FaLeaf, FaMountain } from "react-icons/fa";
import { GiCook, GiMountainCave } from "react-icons/gi";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export default function AboutUs() {
  const founders = [
    {
      name: "Rajat Verma",
      role: "Founder & Executive Chef",
      image: "/owner.webp",
      quote:
        "The mountains have always been my inspiration. I wanted to create a place where people could taste the spirit of the Himalayas.",
    },
    {
      name: "Priya Mathur",
      role: "Co-Founder & Sommelier",
      image: "/api/placeholder/400/400",
      quote:
        "We've carefully crafted every aspect of Grand Vista Retreat to honor the natural beauty and culinary traditions of Mussoorie.",
    },
  ];

  const milestones = [
    {
      year: 1997,
      event: "Grand Vista Retreat founded in a historic mountain cottage",
    },
    {
      year: 2005,
      event: "Expanded with panoramic deck overlooking the Himalayan range",
    },
    {
      year: 2012,
      event: "Awarded 'Best Mountain Restaurant' by Culinary Guild of India",
    },
    {
      year: 2018,
      event: "Launched farm-to-table initiative with local farmers",
    },
    {
      year: 2023,
      event: "Celebrated 25 years with renovation and new tasting menu",
    },
  ];

  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8" id="about">
      {/* Main heading */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            Our Story
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Grand Vista Retreat
          </h3>
          <div className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            <div className="flex justify-center items-center">
              <BiSolidQuoteAltLeft className="text-green-300 inline-block mr-2" />
              <p className="italic">
                Where culinary excellence meets Himalayan majesty
              </p>
              <BiSolidQuoteAltRight className="text-green-300 inline-block ml-2" />
            </div>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="relative mb-24">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Philosophy
              </h3>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
                Nestled in the heart of Mussoorie, our restaurant celebrates the
                harmony of nature, tradition, and culinary innovation.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="flex-shrink-0 bg-green-700 text-white p-6 flex justify-center">
                  <FaMountain className="h-10 w-10" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Mountain Heritage
                    </h4>
                    <p className="mt-3 text-base text-gray-500">
                      Our cuisine is deeply rooted in the mountainous terrain
                      and rich heritage of Uttarakhand, featuring traditional
                      Garhwali recipes with modern interpretations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="flex-shrink-0 bg-green-700 text-white p-6 flex justify-center">
                  <FaLeaf className="h-10 w-10" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Sustainable Dining
                    </h4>
                    <p className="mt-3 text-base text-gray-500">
                      We source ingredients from local farmers and our own
                      kitchen garden, ensuring freshness while supporting the
                      community and reducing our carbon footprint.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="flex-shrink-0 bg-green-700 text-white p-6 flex justify-center">
                  <GiCook className="h-10 w-10" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Culinary Artistry
                    </h4>
                    <p className="mt-3 text-base text-gray-500">
                      Our team of passionate chefs brings together traditional
                      techniques and innovative approaches to create memorable
                      dining experiences with seasonal tasting menus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founders */}
        {/* <div className="bg-white px-6 py-16 rounded-xl shadow-md mb-24">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">
              The Visionaries Behind Grand Vista
            </h3>
            <div className="grid gap-16 lg:grid-cols-2">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-40 w-40 rounded-full object-cover"
                      src={founder.image}
                      alt={founder.name}
                    />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-gray-900">
                      {founder.name}
                    </div>
                    <div className="text-green-600">{founder.role}</div>
                    <p className="mt-3 text-gray-500 italic">
                      "{founder.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Our Journey */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Journey
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
              For over 25 years, we've been creating memorable dining
              experiences in the mountains.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"
              aria-hidden="true"
            ></div>

            <div className="relative z-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-12">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center w-1/2">
                      <div className="bg-green-700 text-white rounded-full p-3 shadow-lg">
                        <FaHistory className="h-6 w-6" />
                      </div>
                      <div className="bg-white rounded-lg shadow-md p-5 mt-4 transform transition-all duration-300 hover:shadow-lg">
                        <div className="font-bold text-green-700 text-xl">
                          {milestone.year}
                        </div>
                        <div className="text-gray-700">{milestone.event}</div>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image with text overlay */}
        <div className="relative rounded-xl overflow-hidden h-96 mb-24">
          <img
            src="/paranomic.webp"
            alt="Grand Vista Retreat panoramic view"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-transparent to-transparent opacity-80"></div>
          <div className="relative h-full flex items-center">
            <div className="px-8 md:px-16 max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-4">
                Experience the Magic of the Mountains
              </h3>
              <p className="text-gray-100 mb-6">
                From our panoramic dining deck, guests can enjoy breathtaking
                views of the Himalayan peaks while savoring cuisine that
                celebrates the bounty of the mountains.
              </p>
              <button className="bg-white text-green-800 px-6 py-2 rounded shadow hover:bg-green-50 transition-colors">
                Make a Reservation
              </button>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-amber-500 flex justify-center mb-4">
                <FaAward className="h-12 w-12" />
              </div>
              <h4 className="font-medium">Best Mountain Restaurant 2022</h4>
              <p className="text-sm text-gray-500">Culinary Guild of India</p>
            </div>
            <div className="p-4">
              <div className="text-amber-500 flex justify-center mb-4">
                <FaAward className="h-12 w-12" />
              </div>
              <h4 className="font-medium">Excellence in Hospitality</h4>
              <p className="text-sm text-gray-500">
                Tourism Board of Uttarakhand
              </p>
            </div>
            <div className="p-4">
              <div className="text-amber-500 flex justify-center mb-4">
                <FaAward className="h-12 w-12" />
              </div>
              <h4 className="font-medium">Sustainable Dining Award</h4>
              <p className="text-sm text-gray-500">
                Green Restaurant Association
              </p>
            </div>
            <div className="p-4">
              <div className="text-amber-500 flex justify-center mb-4">
                <FaAward className="h-12 w-12" />
              </div>
              <h4 className="font-medium">Top 10 Scenic Restaurants</h4>
              <p className="text-sm text-gray-500">Travel & Leisure Magazine</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            We'd Love to Welcome You
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 mb-8">
            Come experience our hospitality and the flavors of the mountains.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md">
              Make a Reservation
            </button>
            <button className="border border-green-700 hover:bg-green-50 text-green-700 px-8 py-3 rounded-md">
              <a href="tel:6397760727">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
