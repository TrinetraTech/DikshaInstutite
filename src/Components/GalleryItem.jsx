import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPlay } from "react-icons/fa";

const GalleryItem = ({ item, variants }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Gallery Card */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <div
          className="group rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          <div className="aspect-video w-full relative bg-black">
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt="Gallery"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                {/* Video Thumbnail Look */}
                <iframe
                  src={item.src}
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <FaPlay className="text-white text-3xl opacity-80" />
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#132a51ab] flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          {item.type === "photo" ? (
            <img
              src={item.src}
              alt="Popup"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          ) : (
            <iframe
              src={item.src}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full max-w-4xl aspect-video rounded-lg shadow-lg"
            />
          )}
        </div>
      )}
    </>
  );
};

export default GalleryItem;
