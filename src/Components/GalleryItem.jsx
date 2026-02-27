import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPlay } from "react-icons/fa";

const getYoutubeId = (url) => {
  if (!url) return null;

  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(regExp);
  return match ? match[1] : null;
};

const GalleryItem = ({ item, variants }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(item);

  const videoId = item.type === "video" ? getYoutubeId(item.src) : null;
  console.log(videoId);

  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

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
                {/* Video Preview Thumbnail */}
                {videoId && (
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                )}

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
              src={item.image}
              alt="Popup"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          ) : (
            embedUrl && (
              <iframe
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-4xl aspect-video rounded-lg shadow-lg"
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default GalleryItem;
