import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/welcomebanner2.png";
import rice from "../assets/rice.mp4";
import aloo from "../assets/aloo.mp4";
import maidadough from "../assets/maida-dough.mp4";
import fry from "../assets/fry.mp4";
import sweet from "../assets/sweet.mp4";
import masalas from "../assets/masalas.mp4";
import { FaUtensils, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCoffee, FaLeaf } from "react-icons/fa";
import DummyMap from "../components/DummyMap";

export default function Welcome() {
  const navigate = useNavigate();
  const videos = [rice, aloo, maidadough, fry, sweet, masalas];
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);

  const breakfastItems = [
    "Idli",
    "Vada",
    "Ven Pongal",
    "Kichadi/Upma",
    "Dosa / Uthappam",
    "Kesari",
    "Tea / Filter Coffee (coffee dine-in only)"
  ];

  const lunchItems = [
    "Sambar Rice",
    "Curd Rice",
    "Poriyal",
    "Kootu",
    "Papad",
    "Sweet",
    "Veg Biryani or Pulav"
  ];
const WHATSAPP_NUMBER = "917010856620"; // <-- replace xxx with your number including country code, e.g., 917845637314



  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto scroll videos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPos = 0;
    let direction = 1;
    const speed = 0.5;

    const interval = setInterval(() => {
      if (!scrollContainer || isHovering) return;

      scrollPos += speed * direction;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollPos >= maxScroll) direction = -1;
      else if (scrollPos <= 0) direction = 1;

      scrollContainer.scrollLeft = scrollPos;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="w-full bg-white overflow-x-hidden overflow-y-scroll scrollbar-hide pt-[100px]">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .gradient-text-animated {
          background: linear-gradient(90deg, #84cc16, #65a30d, #84cc16);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="relative w-full h-[78vh] flex flex-col justify-center items-center text-center overflow-hidden mb-16">
        <img
          src={bannerImage}
          alt="Tasty Tales Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wide animate-fadeInDown flex items-center justify-center gap-3">
            <FaUtensils className="text-yellow-400" />
            Sri Krishna Bhavan
          </h1>
          <p className="text-lg md:text-xl mb-6 font-medium animate-fadeInUp">
            Every Bite Tells a Story
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="px-8 py-3 text-lg bg-lime-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp"
          >
            View Menu
          </button>
        </div>
      </section>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center mb-10 leading-relaxed sm:leading-snug font-serif italic text-lime-700 flex items-center justify-center gap-3 font-normal">
        Welcome to Our Kitchen <FaUtensils className="text-lime-700" />
      </h2>

      <section className="relative px-6 md:px-20 text-center overflow-hidden">
        <div className="animate-on-scroll visible">
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-black leading-relaxed font-medium mb-10">
            "At Sri Krishna Bhavan, every dish tells a story! From sizzling street-food favorites to hearty traditional meals, we bring flavors to life."
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div
                  className={`text-4xl font-bold ${item.color} group-hover:text-lime-400 transition-colors duration-300`}
                >
                  {item.num}
                </div>
                <div className="text-lime-800 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-lime-50">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 font-serif italic text-lime-700 flex items-center justify-center gap-3 font-normal">
            What You Get <FaUtensils className="text-lime-700" />
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Fresh, delicious meals prepared daily with authentic flavors
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-lime-100 hover:border-lime-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-br from-lime-500 to-lime-700 p-3 rounded-full float-animation">
                  <FaCoffee className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-lime-700 text-center mb-4">
                Breakfast
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {breakfastItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-lime-600 mt-0.5 flex-shrink-0 text-xs">✦</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>

          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-lime-100 hover:border-lime-300">
            <div className="absolute top-0 left-0 w-32 h-32 bg-lime-600 rounded-br-full opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-br from-lime-500 to-lime-700 p-3 rounded-full float-animation" style={{ animationDelay: '0.5s' }}>
                  <FaLeaf className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-lime-700 text-center mb-4">
                Lunch
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {lunchItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-lime-600 mt-0.5 flex-shrink-0 text-xs">✦</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-lime-600 to-lime-700 rounded-xl shadow-lg p-6 md:p-8 text-white">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-300 text-xl" />
              <span className="font-semibold">Delivery: 15–30 minutes</span>
            </div>
            <span className="hidden md:inline text-yellow-300">•</span>
            <div className="flex items-center gap-2">
              <FaCoffee className="text-yellow-300 text-xl" />
              <span className="font-semibold">Breakfast: 6:30–10:30 AM</span>
            </div>
            <span className="hidden md:inline text-yellow-300">•</span>
            <div className="flex items-center gap-2">
              <FaLeaf className="text-yellow-300 text-xl" />
              <span className="font-semibold">Lunch: 11:30 AM–2:30 PM</span>
            </div>
            <span className="hidden md:inline text-yellow-300">•</span>
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-300 text-xl" />
              <span className="font-semibold">Mon–Sat</span>
            </div>
          </div>
        </div>
      </section>

{/* plans and pricing */}

<section className="py-16 px-6 md:px-20 bg-white">
  <div className="text-center mb-12 animate-on-scroll">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 font-serif italic text-lime-700 flex items-center justify-center gap-3 font-normal">
      Plans & Pricing <FaUtensils className="text-lime-700" />
    </h2>
    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
      Choose a meal plan that fits your lifestyle and enjoy homely, delicious food every day!
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-8 items-stretch">
    {/* Plan 1 */}
    <div className="flex flex-col justify-between bg-white border-2 border-lime-200 hover:border-lime-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 w-80 h-[230px] p-6 text-center">
      <div>
        <h3 className="text-2xl font-bold text-lime-700 mb-2">Weekly Saver (7 Days)</h3>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold text-lime-600">Offer:</span> ₹910 <span className="text-gray-500">(₹130/day)</span>
        </p>
        <p className="text-gray-600 line-through">Regular: ₹1120</p>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the Weekly Saver (7 Days).`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaPhoneAlt className="text-white" /> Subscribe via WhatsApp
      </a>
    </div>

    {/* Plan 2 */}
    <div className="flex flex-col justify-between bg-white border-2 border-lime-200 hover:border-lime-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 w-80 h-[230px] p-6 text-center">
      <div>
        <h3 className="text-2xl font-bold text-lime-700 mb-2">10-Day Value Pack</h3>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold text-lime-600">Offer:</span> ₹1300 <span className="text-gray-500">(₹130/day)</span>
        </p>
        <p className="text-gray-600 line-through">Regular: ₹1600</p>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the 10-Day Value Pack.`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaPhoneAlt className="text-white" /> Subscribe via WhatsApp
      </a>
    </div>

    {/* Plan 3 */}
    <div className="flex flex-col justify-between bg-white border-2 border-lime-200 hover:border-lime-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 w-80 h-[230px] p-6 text-center">
      <div>
        <h3 className="text-2xl font-bold text-lime-700 mb-2">Monthly Family Pack (30 Days)</h3>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold text-lime-600">Offer:</span> ₹3900 <span className="text-gray-500">(₹130/day)</span>
        </p>
        <p className="text-gray-600 line-through">Regular: ₹4800</p>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the Monthly Family Pack (30 Days).`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaPhoneAlt className="text-white" /> Subscribe via WhatsApp
      </a>
    </div>
  </div>
</section>

{/* video section */}

      <section className="py-16 px-6 md:px-20 relative">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 font-serif italic text-lime-700 flex items-center justify-center gap-3 font-normal">
            Watch Our Cooking Videos <FaUtensils className="text-yellow-500" />
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto">
            Learn the secrets behind our delicious recipes with our step-by-step cooking tutorials
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex space-x-6 pb-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                animationDelay: `${idx * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}