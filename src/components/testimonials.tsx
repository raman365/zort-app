import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react"; // Star icon

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
const testimonials = [
  {
    text: "Pikkit has completely transformed the way I approach sports betting. The app's intuitive design and comprehensive features have made tracking my bets a breeze.",
    author: "John D.",
  },
  {
    text: "Maybe my favorite app ever. It’s absolutely essential for multiple sports bettors.",
    author: "Woodie K.",
  },
  {
    text: "The AI insights are spot on. I've seen a huge improvement in my results.",
    author: "Sarah K.",
  },
  {
    text: "Easy to use and incredibly helpful. A must-have for bettors.",
    author: "Mike L.",
  },
  {
    text: "I love the dashboard. The analytics are next-level!",
    author: "Jessica P.",
  },
  {
    text: "Finally, a betting tool that actually works. My profits have increased significantly!",
    author: "Emily S.",
  },
];

function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      id="testimonials"
      className="bg-[#11151b] text-white py-20"
    >
      <div className="text-center">
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="place-self-center text-4xl md:text-5xl font-bold text-white"
          style={{
            background: "linear-gradient(45deg, #ffffff, #7F00FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hear from our users
        </motion.h2>

        {/* Stars & Review Count */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 mt-4 text-lg font-semibold"
        >
          <div className="flex text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} size={24} fill="currentColor" stroke="none" />
              ))}
          </div>
          <span className="text-white">6K+ reviews</span>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div variants={fadeInUp} className="mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 md:p-8 bg-[#14151A] rounded-2xl shadow-lg text-left border border-gray-700">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    {/* Apple Logo */}
                    <div className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full">
                      🍏
                    </div>
                    <div>
                      {/* Stars & Name */}
                      <div className="flex text-yellow-400">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill="currentColor"
                              stroke="none"
                            />
                          ))}
                      </div>
                      <h4
                        style={{
                          background:
                            "linear-gradient(45deg, #ffffff, #7F00FF)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="font-bold text-white mt-1"
                      >
                        {testimonial.author}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
