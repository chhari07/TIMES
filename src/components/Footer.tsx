

const Footer = () => {
  return (
    <footer className="w-full bg-black    text-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
        <h3
            className="mt-20  lg:mt-3   md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >मांनद Times  </h3>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-10 mb-6">
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/services" className="hover:text-gray-300">Services</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.404.596 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.503 0-1.793.713-1.793 1.758v2.308h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.326-.596 1.326-1.326V1.326C24 .596 23.404 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.954 9.954 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.384 4.482 13.946 13.946 0 0 1-10.134-5.14 4.89 4.89 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.188 4.098 4.914 4.914 0 0 1-2.228-.616v.061a4.926 4.926 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.083 4.927 4.927 0 0 0 4.6 3.42A9.867 9.867 0 0 1 .98 19.845a13.944 13.944 0 0 0 7.548 2.213c9.051 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.014-.633A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>
          {/* Add other social media links here */}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} मांनद Times. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
