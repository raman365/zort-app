import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-opacity-75 text-white py-4 shadow-lg">
      <div className="flex justify-between items-center px-[3%]">
        <a href="https://raman365.github.io/zort-app/">
          <img
            src={logo}
            alt="Logo"
            className="h-8"
          />
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#howitworks"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
