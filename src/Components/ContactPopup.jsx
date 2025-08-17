import { FaWhatsapp, FaTimes, FaPhoneAlt } from "react-icons/fa";

const ContactPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#2e56698a] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          <FaTimes />
        </button>

        {/* Popup Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Started with Diksha Classes
          </h3>
          <p className="text-gray-600 mb-6">
            Choose your preferred way to connect with us
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/919955411119"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <FaWhatsapp className="mr-3 text-xl" />
              Message on WhatsApp
            </a>
            <a
              href="tel:+919955411119"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <FaPhoneAlt className="mr-3 text-xl" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
