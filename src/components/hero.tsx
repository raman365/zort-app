import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MobileHeader from "./mobile-header";
import Header from "./header";
import Image1 from "../assets/screen1.png";
import Image2 from "../assets/screen2.png";
import Image3 from "../assets/screen3.png";

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

function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="relative text-white md:h-screen flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #1a0034 0%, #000000 100%)",
      }}
    >
      {/* Include the Header */}
      <div className="md:block hidden">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="py-8 max-w-max self-center md:px-[10%] px-[5%] gap-8 flex flex-1 flex-col md:flex-row items-center justify-center">
        {/* Left Side (Text) */}
        <motion.div
          variants={fadeInUp}
          className="md:w-2/5 text-center md:text-left"
        >
          <h1
            className="text-5xl font-bold mb-6"
            style={{
              background: "linear-gradient(45deg, #ffffff, #7F00FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI-Powered Bet Tracking
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Discover smarter betting with cutting-edge AI. Effortlessly manage
            your bets, gain actionable insights, and elevate your game with
            precision analytics.
          </p>
          <motion.a
            variants={fadeInUp}
            href="https://apps.apple.com/gb/app/zort/id6740245454"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg transition-colors duration-300"
            style={{
              background: "linear-gradient(45deg, #25004a, #7F00FF)",
              color: "white",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Get the App
          </motion.a>
        </motion.div>

        {/* Right Side (Stacked Images) */}
        <motion.div
          variants={staggerContainer}
          className="md:w-3/5 mt-8 md:mt-0 flex justify-center relative"
        >
          <motion.img
            variants={fadeInUp}
            src={Image1}
            alt="screen1"
            className="w-40 md:w-60 z-20 rounded-lg shadow-lg opacity-90"
          />
          <motion.img
            variants={fadeInUp}
            src={Image2}
            alt="screen2"
            className="w-40 md:w-60 z-10 absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg rotate-12 opacity-60"
          />
          <motion.img
            variants={fadeInUp}
            src={Image3}
            alt="screen3"
            className="w-40 md:w-60 z-0 absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg -rotate-12 opacity-60"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
