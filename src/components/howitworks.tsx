import { FaCamera, FaBrain, FaChartLine } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import arrow from "../assets/right-arrow.svg"; // Importing arrow image

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

function HowItWorks() {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <motion.section
    ref={containerRef}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      id="howitworks"
      className="bg-[#11151b] text-white py-20 flex items-center justify-center"
    >
      <div className="md:px-[10%] px-[5%] flex flex-col items-center">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          style={{
            background: "linear-gradient(45deg, #ffffff, #7F00FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center md:items-start justify-between md:space-y-0 relative"
        >
          {/* SVG Gradient Definition */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
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

          {/* Step 1 */}
          <motion.div
            variants={fadeInUp}
            className="flex w-full flex-col items-center flex-1 p-6"
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-5xl font-bold text-blue-400 mb-4"
            >
              1
            </div>
            <FaCamera
              className="text-4xl mb-4"
              style={{ fill: "url(#gradient1)" }}
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Scan Bet Slip
            </h3>
            <p className="text-center text-gray-400">
              Easily scan your bet slip for instant AI analysis.
            </p>
          </motion.div>

          {/* Arrow 1 */}
          <motion.img
            src={arrow}
            alt="Arrow"
            className="scale-150 hidden md:block w-16 h-auto"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Step 2 */}
          <motion.div
            variants={fadeInUp}
            className="flex w-full flex-col items-center flex-1 p-6"
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-5xl font-bold text-blue-400 mb-4"
            >
              2
            </div>
            <FaBrain
              className="text-4xl mb-4"
              style={{ fill: "url(#gradient1)" }}
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Analyze Data
            </h3>
            <p className="text-center text-gray-400">
              AI-powered insights to maximize your winning strategy.
            </p>
          </motion.div>

          {/* Arrow 2 */}
          <motion.img
            src={arrow}
            alt="Arrow"
            className="scale-150 hidden md:block w-16 h-auto"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Step 3 */}
          <motion.div
            variants={fadeInUp}
            className="flex w-full flex-col items-center flex-1 p-6"
            whileHover={{ scale: 1.05 }}
          >
            <div
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-5xl font-bold text-blue-400 mb-4"
            >
              3
            </div>
            <FaChartLine
              className="text-4xl mb-4"
              style={{ fill: "url(#gradient1)" }}
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Track Progress
            </h3>
            <p className="text-center text-gray-400">
              Monitor your performance with detailed insights.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HowItWorks;
