import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => (
  <div className="bg-blue-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-2xl text-yellow-400 mr-2" />
            <span className="text-xl font-bold">Diksha Classes</span>
          </div>
          <p className="text-gray-300 mb-4">
            Diksha Classes is dedicated to empowering students to achieve their
            academic dreams through quality education and personal mentoring.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["home", "about", "classes", "gallery", "contact"].map((link) => (
              <li key={link}>
                <Link
                  to={link === "home" ? "/" : `/${link}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 capitalize"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2 text-gray-300">
            <p>
              <FaMapMarkerAlt className="inline mr-2 text-yellow-400" />
              <a
                href="https://maps.app.goo.gl/7edLW1m4w7eswXq17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                Radhe Shyam Market, Akashwani Road, Near Passport Office,
                Patna-14
              </a>
            </p>
            <p>
              <FaPhoneAlt className="inline mr-2 text-yellow-400" />
              <a href="tel:9955411119" className="hover:text-yellow-400">
                9955411119
              </a>
            </p>
            <p>
              <FaPhoneAlt className="inline mr-2 text-yellow-400" />
              <a href="tel:8294447675" className="hover:text-yellow-400">
                8294447675
              </a>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-8 text-center">
        <p className="text-gray-300">
          &copy; 2025 Diksha Classes. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
