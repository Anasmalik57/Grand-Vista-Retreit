import {
  FiHome,
  FiMail,
  FiPhone,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex  justify-around max-auto gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Grand Vista Retreat
            </h3>
            <p className="mb-4 max-w-md">
              Dine in style with warm, sophisticated interiors that create an
              inviting ambiance for an unforgettable evening.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <FiHome className="mr-3 mt-1" />
                <span>
                  123 Craft Lane, Design District
                  <br />
                  New Delhi, 110001
                </span>
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-3" />
                <span>+91 000000000</span>
              </p>
              <p className="flex items-center">
                <FiMail className="mr-3" />
                <span>info.grandvista.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {currentYear} Artizan Designs. All rights reserved. |
            <a
              href="/privacy-policy"
              className="ml-2 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/terms-of-service"
              className="ml-2 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
