import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion
import logo from "../assets/logo.png";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scrolling when the menu is open and prevent layout shift
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Add padding to account for scrollbar width
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = ""; // Reset padding
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="z-30 w-full bg-[#02070d] bg-opacity-75 text-white py-4 shadow-lg md:hidden">
      <div className="flex justify-between items-center px-[3%]">
        {/* Dropdown Icon */}
        <button
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <a
            href="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <img src={logo} alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Get App Button */}
        <a
          href="https://apps.apple.com/gb/app/zort/id6740245454"
          target="_blank"
          className="text-white px-4 py-2 rounded-lg transition-colors duration-300"
          style={{
            background: "linear-gradient(45deg, #25004a, #7F00FF)",
            color: "white",
          }}
        >
          Get App
        </a>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#11151b] mt-4 text-white"
        >
          <motion.ul
            className="flex flex-col items-start space-y-6 py-10 px-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.5, // Delay before starting the stagger
                  staggerChildren: 0.2, // Delay between each menu item
                },
              },
            }}
          >
            {[
              { href: "#howitworks", label: "How It Works" },
              { href: "#features", label: "Features" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#pricing", label: "Pricing" },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={item.href}
                  className="text-2xl hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </header>
  );
}

export default MobileHeader;
