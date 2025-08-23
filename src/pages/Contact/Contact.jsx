import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import image from "../../assets/Person.jpeg"; // replace with your image path

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-[24px]">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-blue-600 font-semibold">Get in Touch</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Let’s Chat, Contact with Us
          </h2>
          <p className="text-gray-600 mt-3">
            Have any questions or feedback? We’re here to help. Send us a
            message, we’ll get back to you within 24 hours.
          </p>

          <form className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="yourname@company.com"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="+1 (555) 444-0000"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Type your message"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  Radhe Shyam Market, Akashwani Road,
                  <br />
                  Near Passport Office, Patna-14
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Phone Numbers
                </h3>
                <p className="text-gray-600">
                  Mobile: 9955411119, 8294447675
                  <br />
                  Office: 8651738728
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <FaClock className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Saturday: 8:00 AM - 8:00 PM
                  <br />
                  Sunday: 9:00 AM - 11:00 AM
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-4">
            <a
              href="https://wa.me/919955411119"
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center"
            >
              <FaWhatsapp className="mr-3 text-xl" />
              Message on WhatsApp
            </a>
            <a
              href="tel:+919955411119"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center"
            >
              <FaPhoneAlt className="mr-3 text-xl" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6950.094731162092!2d85.12880339442019!3d25.601839331520697!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1755213004466!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "none", margin: "20px 0 0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log('Form submitted:', formData);

//       // Reset form after successful submission
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });

//       alert('Message sent successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Error sending message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-container">
//       {/* Header Section */}
//       <div className="contact-header">
//         <h1>Contact Us</h1>
//         <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
//       </div>

//       {/* Main Content */}
//       <div className="contact-content">
//         {/* Contact Information */}
//         <div className="contact-info">
//           <h2>Get in Touch</h2>

//           <div className="info-item">
//             <div className="icon">📍</div>
//             <div className="info-text">
//               <h3>Address</h3>
//               <p>123 Business Street<br />City, State 12345</p>
//             </div>
//           </div>

//           <div className="info-item">
//             <div className="icon">📞</div>
//             <div className="info-text">
//               <h3>Phone</h3>
//               <p>+1 (555) 123-4567</p>
//             </div>
//           </div>

//           <div className="info-item">
//             <div className="icon">✉️</div>
//             <div className="info-text">
//               <h3>Email</h3>
//               <p>contact@example.com</p>
//             </div>
//           </div>

//           <div className="info-item">
//             <div className="icon">🕒</div>
//             <div className="info-text">
//               <h3>Business Hours</h3>
//               <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="contact-form">
//           <h2>Send Message</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="6"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="submit-btn"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
