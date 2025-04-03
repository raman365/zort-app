import { CheckCircle, Star, Rocket } from "lucide-react"; // Icons for plans
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

function Pricing() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2});

  return (
    <motion.section
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer} id="pricing" className="bg-[#02070d] text-white py-20">
      <div className="md:px-[10%] px-[5%] flex flex-col items-center text-center">
        {/* Section Title */}
        <motion.h2
        variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{
            background: "linear-gradient(45deg, #ffffff, #7F00FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choose Your Plan
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <motion.div
          variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 bg-[#14151A] rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-purple-400/30"
          >
            <div className="mb-4">
              <CheckCircle style={{ stroke: "url(#gradient1)" }} size={40} />
            </div>
            <h3
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl font-bold mb-3"
            >
              Free Plan
            </h3>
            <p className="text-gray-400 mb-6">
              Get started with basic features, perfect for casual bettors.
            </p>

            {/* Pricing */}
            <p
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-3xl font-bold text-white mb-4"
            >
              $0 <span className="text-lg text-gray-400">/ month</span>
            </p>

            {/* Features List */}
            <ul className="text-gray-400 space-y-2 text-left">
              <li>✔ AI Bet Slip Scanner</li>
              <li>✔ Basic Performance Dashboard</li>
              <li>✔ 5 Free Bet Analyses Per Month</li>
            </ul>

            <button
              style={{
                background: "linear-gradient(45deg, #25004a, #7F00FF)",
                color: "white",
              }}
              className="mt-6 w-full bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Start for Free
            </button>
          </motion.div>

          {/* Premium Plan - Best Value */}
          <motion.div
          variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg border border-purple-500 transition-all duration-300"
          >
            {/* Best Value Badge */}
            <div className="absolute top-4 right-4 bg-purple-300 text-black text-sm px-3 py-1 rounded-full font-bold">
              Best Value
            </div>

            <div className="mb-4">
              <Star style={{ stroke: "url(#gradient1)" }} size={40} />
            </div>
            <h3
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl font-bold mb-3"
            >
              Premium Plan
            </h3>
            <p className="text-gray-200 mb-6">
              Advanced insights, real-time data, and AI-driven analytics.
            </p>

            {/* Pricing */}
            <p
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-3xl font-bold text-white mb-4"
            >
              $19.99 <span className="text-lg text-gray-300">/ month</span>
            </p>

            {/* Features List */}
            <ul className="text-gray-200 space-y-2 text-left">
              <li>✔ Unlimited AI Bet Analyses</li>
              <li>✔ Full Interactive Dashboard</li>
              <li>✔ Custom Alerts & Predictions</li>
              <li>✔ Priority Support</li>
            </ul>

            <button
              style={{
                background: "linear-gradient(45deg, #25004a, #7F00FF)",
                color: "white",
              }}
              className="mt-6 w-full px-6 py-3 rounded-lg font-bold"
            >
              Upgrade Now
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
          variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 bg-[#14151A] rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-purple-400/30"
          >
            <div className="mb-4">
              <Rocket style={{ stroke: "url(#gradient1)" }} size={40} />
            </div>
            <h3
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl font-bold mb-3"
            >
              Pro Plan
            </h3>
            <p className="text-gray-400 mb-6">
              For serious bettors who want cutting-edge AI tools.
            </p>

            {/* Pricing */}
            <p
              style={{
                background: "linear-gradient(45deg, #ffffff, #7F00FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-3xl font-bold text-white mb-4"
            >
              $49.99 <span className="text-lg text-gray-400">/ month</span>
            </p>

            {/* Features List */}
            <ul className="text-gray-400 space-y-2 text-left">
              <li>✔ Everything in Premium</li>
              <li>✔ 1-on-1 AI Coaching</li>
              <li>✔ Advanced Bet Probability Models</li>
              <li>✔ Early Access to New Features</li>
            </ul>

            <button
              style={{
                background: "linear-gradient(45deg, #25004a, #7F00FF)",
                color: "white",
              }}
              className="mt-6 w-full text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Go Pro
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Pricing;
