import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GiChefToque } from "react-icons/gi";
// Image imports
import dosa from "../assets/ghee-dosa.jpg";
import pongal from "../assets/ghee-pongal.jpg";
import poori from "../assets/poori.jpg";
import podi from "../assets/podi-idly.jpg";
import vadai from "../assets/vadai.jpg";
import ravauppuma from "../assets/rava-uppuma.jpg";
import chapathi from "../assets/chapathi.jpg";
import channacurry from "../assets/channa-curry.jpg";
import paneer from "../assets/paneer-pulao.jpg";
import parotta from "../assets/parotta-veg-curry.jpg";
import meals from "../assets/meals-combo.jpg";
import kadaai from "../assets/kadaai-paneer.jpg";
import vegmeals from "../assets/veg-meals.jpg";
import briyani from "../assets/veg-briyani.jpg";
import gobicurry from "../assets/gobi-gravy.jpg";
import ravadosa from "../assets/rava-dosa.jpg";
import chapathivegcurry from "../assets/chapathi-veg-curry.jpg";
import uthappam from "../assets/uthappam.jpg";
import paniyaram from "../assets/paniyaram.jpg";
import aapam from "../assets/aapam.jpg";
import noodles from "../assets/noodles.jpg";
import idiyappam from "../assets/idiyappam.jpg";
import roti from "../assets/roti-veg-curry.jpg";
import masaladosa from "../assets/masala-dosa.jpg";

function Menu() {
  const navigate = useNavigate();
  const breakfastRef = useRef(null);
  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);

  const images = {
    breakfast: [dosa, pongal, poori, podi, masaladosa, vadai, ravauppuma, chapathi],
    lunch: [channacurry, paneer, parotta, meals, kadaai, vegmeals, briyani, gobicurry],
    dinner: [ravadosa, chapathivegcurry, uthappam, paniyaram, aapam, noodles, idiyappam, roti],
  };

  const breakfastNames = ["Ghee Dosa", "Ghee Pongal", "Poori", "Podi Idly", "Masala Dosa", "Vadai", "Rava Uppuma", "Chapathi"];
  const lunchNames = ["Channa Curry", "Paneer Pulao", "Parotta with Veg Curry", "Meals Combo", "Kadaai Paneer", "Veg Meals", "Veg Briyani", "Gobi Gravy"];
  const dinnerNames = ["Rava Dosa", "Chapathi Veg Curry", "Uthappam", "Paniyaram", "Aapam", "Noodles", "Idiyappam", "Roti Veg Curry"];

  return (
    <div className="pt-24 px-6 md:px-16 bg-white min-h-screen">
      <style>{`
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Main Layout */}
      <div className="flex gap-6 relative">
        <div className="flex-1">
          {[
            { ref: breakfastRef, title: "Breakfast", data: images.breakfast, names: breakfastNames },
            { ref: lunchRef, title: "Lunch", data: images.lunch, names: lunchNames },
            { ref: dinnerRef, title: "Dinner", data: images.dinner, names: dinnerNames },
          ].map((section, idx) => (
            <section key={idx} ref={section.ref} className="mb-16 scroll-mt-28">
              <h2 className="text-3xl font-serif italic font-bold text-lime-700 text-center mb-8 pt-5">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.data.map((img, i) => (
                  <div key={i} className="flip-card w-full h-64 shadow-lg rounded-lg perspective-[1000px]">
                    <div className="flip-card-inner relative w-full h-full">
                      {/* Front */}
                      <div className="flip-card-front absolute w-full h-full rounded-lg overflow-hidden">
                        <img src={img} alt={`${section.title} ${i + 1}`} className="w-full h-full object-cover" />
                      </div>

                      {/* Back */}
                      <div className="flip-card-back absolute w-full h-full flex flex-col justify-center items-center text-center p-4 bg-gradient-to-br from-green-700 via-lime-600 to-yellow-400 rounded-lg">
                        <h3 className="text-2xl font-bold mb-2 text-white">{section.names[i]}</h3>
                        <p className="text-lg italic text-yellow-200 flex items-center gap-2 mb-4">
                          <GiChefToque className="text-yellow-400 text-xl" /> Delicious & Healthy!
                        </p>
                        <button
                          onClick={() => navigate("/order-now")}
                          className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
