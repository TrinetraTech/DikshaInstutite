import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const GalleryItem = ({ item, variants, brandColors }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

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
          onClick={() => setIsOpen(true)} // open popup on click
        >
          <div className="aspect-video w-full relative">
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt="Gallery item"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#132a51ab] bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
            onClick={() => {
              setIsOpen(false);
              setIsPlaying(false);
              if (videoRef.current) {
                videoRef.current.pause();
              }
            }}
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
            <video
              ref={videoRef}
              src={item.src}
              controls
              autoPlay
              loop
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default GalleryItem;
