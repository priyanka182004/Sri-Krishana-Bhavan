import React from 'react';
// import vegb from '../assets/vegb.jpeg';
import meals from '../assets/full-meals.jpg';
import Food from '../assets/foodv3.mp4';

const AboutUs = () => {
  
    return (
        <section className="relative bg-white text-black py-20 px-6 md:px-20">
            <div className="relative z-10 max-w-7xl mx-auto space-y-16">

                <div className="text-center mt-4">
                    <h1 className="text-5xl font-serif italic text-lime-700 mb-4">About Us</h1>
                    <p className="text-lg max-w-2xl mx-auto text-gray-800">
                        At <span className="font-semibold text-lime-700">Flavor Haven</span>, every dish tells a story. Step into a world of authentic flavors, warm memories, and food made with love.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    <div>
                        <img
                            src={meals}
                            alt="Our Story"
                            className="rounded-xl shadow-xl object-cover w-full h-64 md:h-80 lg:h-96 border-2 border-black-030"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif italic text-lime-700 mb-4">Our Story</h2>
                        <p className="text-lg mb-4 leading-relaxed text-gray-800">
                            <b>Sri Krishna Bhavan</b> is the beginning of a new culinary journey, created with a passion for <b>authentic South Indian flavors</b>. Though we’ve just started our venture, our goal is to bring <b>freshly prepared, homely dishes</b> straight from our kitchen to your table.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            We also take pride in serving <b>bulk orders for festivals, family gatherings, and special occasions</b>, ensuring every meal is cooked with care and delivered with warmth. At <b>Sri Krishna Bhavan</b>, every order is a celebration of <b>taste and tradition</b>.
                        </p>
                    </div>

                </div>

              <div className="bg-gray-50 p-10 rounded-xl shadow-md">
  <h2 className="text-3xl font-serif italic text-lime-700 mb-6 text-center">
    Special Events
  </h2>
  <ul className="max-w-3xl mx-auto space-y-4 text-gray-800 text-lg list-disc list-inside">
    <li>
      <strong>Festival Orders:</strong> We accept <b>bulk orders</b> for festivals and celebrations — enjoy freshly prepared dishes made with traditional flavors.
    </li>
    <li>
      <strong>Family Gatherings:</strong> Make your special occasions memorable with our <b>customized catering services</b> for small or large gatherings.
    </li>
    <li>
      <strong>Corporate Events:</strong> Bring authentic South Indian taste to your workplace with our <b>event catering and delivery</b> options.
    </li>
  </ul>
</div>


                <div className="bg-gray-100 py-12 px-4 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-serif italic text-lime-700 mb-6 text-center">Behind the Kitchen</h2>
                    <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
                        Take a sneak peek into how our chefs create culinary magic every day, blending tradition with innovation.
                    </p>
                    <div className="flex justify-center items-center w-full">
                        <video
                            src={Food}
                            controls
                            className="w-[60%] h-96 rounded-lg shadow-lg                                        object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-serif mb-4 text-gray-800">Taste the magic today!</h2>
                    {/* <p className="mb-6 text-gray-800">Join us for an unforgettable dining experience that delights the senses.</p>
                    <a
                        href="/menu"
                        className="inline-block bg-lime-800 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
                    >
                        View Our Menu
                    </a> */}
                </div>

            </div>
        </section>
    );
};

export default AboutUs;