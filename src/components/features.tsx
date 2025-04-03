import { Scan, BarChart3, Brain, Shield } from "lucide-react"; // Feature Icons
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      id="features"
      className="bg-[#0B0C10] text-white py-20 flex justify-center"
    >
      <div className="md:px-[10%] px-[5%] flex flex-col items-center">
        {/* Section Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          style={{
            background: "linear-gradient(45deg, #ffffff, #7F00FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why Choose Zort?
        </motion.h2>

        {/* SVG Gradient Definition */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#7F00FF", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "AI Bet Slip Scanner",
              description:
                "Instantly scan and analyze any bet slip. Our AI extracts odds, stakes, and potential returns with incredible accuracy.",
              icon: <Scan style={{ stroke: "url(#gradient1)" }} size={36} />,
            },
            {
              title: "Interactive Dashboard",
              description:
                "Track your performance with beautiful visualizations. Monitor win rates, ROI, and betting patterns in real-time.",
              icon: (
                <BarChart3 style={{ stroke: "url(#gradient1)" }} size={36} />
              ),
            },
            {
              title: "Smart Analytics",
              description:
                "Get intelligent insights about your betting behavior. Identify winning strategies and optimize your approach.",
              icon: <Brain style={{ stroke: "url(#gradient1)" }} size={36} />,
            },
            {
              title: "Secure & Private",
              description:
                "Your data is encrypted and protected. We prioritize your privacy and security above everything.",
              icon: <Shield style={{ stroke: "url(#gradient1)" }} size={36} />,
            },
          ].map((feature, index) => (
            <motion.div
            variants={fadeInUp}
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-[#14151A] rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-400/30"
            >
              {/* Icon with Gradient */}
              <div className="mb-4">{feature.icon}</div>

              {/* Title & Description */}
              <h3
                style={{
                  background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-2xl font-bold mb-3"
              >
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
