import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setIsSent(true);
      form.reset();
    } catch (err) {
      alert("Submission Failed");
    }

    setIsSending(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-[24px]">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-blue-600 font-semibold">Get in Touch</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Let’s Chat, Contact with Us
          </h2>

          <p className="text-gray-600 mt-3">
            Have any questions or feedback? We’re here to help.
          </p>

          {isSent && (
            <div className="mt-4 bg-green-100 text-green-700 p-3 rounded-lg">
              Message Sent Successfully
            </div>
          )}

          {/* NETLIFY FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            {/* REQUIRED */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="yourname@email.com"
              required
              className="border border-gray-300 rounded-lg p-3 w-full"
            />

            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              className="border border-gray-300 rounded-lg p-3 w-full"
            />

            <textarea
              name="message"
              placeholder="Type your message"
              rows="4"
              required
              className="border border-gray-300 rounded-lg p-3 w-full"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                isSending
                  ? "bg-gray-400 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">
                  2nd floor Radhe Shyam Market, Aakashwani Road, Khajpura, Patna
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone Numbers</h3>
                <p className="text-gray-600">9955411119, 8294447675</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaClock className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Office Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 8 AM - 8 PM</p>
              </div>
            </div>
          </div>

          {/* CTA */}
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

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.95235318785615!2d85.07947857026991!3d25.608267032207113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57b979c97617%3A0x9d93e3183153082!2sDIKSHA%20CLASSES!5e1!3m2!1sen!2sin!4v1757010887861!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "none", margin: "20px 0 0" }}
        loading="lazy"
      />
    </div>
  );
}
