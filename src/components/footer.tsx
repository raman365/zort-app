import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#11151b] text-gray-400 pb-6 pt-12">
      <div className="md:px-[10%] px-[3%] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Zort App Logo" className="h-12 mb-3" />
          <p className="text-sm">Your ultimate AI-powered betting assistant.</p>
        </div>

        {/* Empty Column (For Spacing) */}
        <div></div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3 text-left">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <a href="https://raman365.github.io/zort-app/" className="hover:text-purple-400 transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-purple-400 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">
            Testimonials
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-3 text-left">
          <h3 className="text-white font-semibold">Socials</h3>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="md:px-[10%] px-[3%] border-t border-gray-700 mt-8 pt-6 text-sm">
        &copy; 2025 Zort App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
