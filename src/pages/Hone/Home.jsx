import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactPopup from "../../Components/ContactPopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [homeData, setHomeData] = useState(null);
  const [teamData, setTeamData] = useState([]);
  const [marqueeNotices, setMarqueeNotices] = useState([]);

  useEffect(() => {
    fetch("/content/dashboard.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.notices
          ?.filter((notice) => notice.showInMarquee)
          ?.sort((a, b) => new Date(b.date) - new Date(a.date));

        setMarqueeNotices(filtered);
      });
  }, []);

  useEffect(() => {
    fetch("/content/team.json")
      .then((res) => res.json())
      .then((data) => setTeamData(data.members))
      .catch((err) => console.error("CMS Team Load Error:", err));
  }, []);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // 🔥 FETCH COMPLETE HOME DATA
  useEffect(() => {
    fetch("/content/home.json")
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.error("Home CMS Load Error:", err));
  }, []);
  console.log(homeData);

  // HERO AUTO SLIDER
  useEffect(() => {
    if (!homeData?.hero?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeData.hero.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [homeData]);

  if (!homeData) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      {marqueeNotices.length > 0 && (
        <div className="bg-white text-blue-600 font-bold py-2 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-sm md:text-base font-medium">
            {marqueeNotices.map(
              (notice, index) =>
                notice.file && (
                  <a
                    key={index}
                    href={notice.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-8 hover:underline cursor-pointer"
                  >
                    {notice.title} -{" "}
                    {new Date(notice.date).toLocaleDateString()}
                  </a>
                ),
            )}
          </div>
        </div>
      )}
      {/* ================= HERO ================= */}
      {homeData.hero?.length > 0 && (
        <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${homeData.hero[currentIndex]?.image})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              {homeData.hero[currentIndex]?.title}
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mt-6 mb-10">
              {homeData.hero[currentIndex]?.subtitle}
            </p>

            {homeData.hero[currentIndex]?.buttonText && (
              <button
                onClick={() => setShowPopup(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full"
              >
                {homeData.hero[currentIndex]?.buttonText}
              </button>
            )}
          </div>
        </section>
      )}

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
            {homeData.featuresSection?.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {homeData.featuresSection?.features?.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={homeData.ourStory?.image}
            alt="Our Story"
            className="rounded-2xl shadow-xl w-full"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {homeData.ourStory?.title}
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              {homeData.ourStory?.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {homeData.ourStory?.stats?.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-indigo-50 rounded-lg"
                >
                  <div className="text-3xl font-bold text-indigo-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="mt-8 bg-indigo-600 text-white py-3 px-6 rounded-lg"
            >
              {homeData.ourStory?.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {homeData.testimonialsSection?.title}
          </h2>

          <p className="text-gray-600 mb-14">
            {homeData.testimonialsSection?.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.testimonialsSection?.testimonials?.map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                    />
                    <div className="ml-4 text-left">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-indigo-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">“{testimonial.quote}”</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {homeData.coursesSection?.title}
          </h2>

          <p className="text-gray-600 mb-14">
            {homeData.coursesSection?.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.coursesSection?.courses?.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>

                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="text-indigo-600 font-semibold mb-4">
                    Duration: {course.duration}
                  </div>

                  <ul className="space-y-1 text-left">
                    {course.highlights?.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setShowPopup(true)}
                  className="w-full py-3 bg-indigo-600 text-white"
                >
                  {course.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACULTY ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Meet Our Expert Faculty
          </h2>

          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Renowned educators with proven track records of student success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData?.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl object-cover"
                />

                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-indigo-600 font-semibold mb-2">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm mb-3">
                  {member.qualification}
                </p>

                <p className="text-gray-700 bg-indigo-50 px-3 py-1 rounded-full text-sm inline-block">
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            {homeData.gallerySection?.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {homeData.gallerySection?.gallery?.map((g, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {homeData.faqSection?.title}
            </h2>
            <p className="text-gray-600">{homeData.faqSection?.subtitle}</p>
          </div>

          <div className="space-y-4">
            {homeData.faqSection?.faqs?.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-indigo-600 text-2xl">
                    {activeFaq === index ? "-" : "+"}
                  </span>
                </button>

                {activeFaq === index && (
                  <div className="p-6 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              {homeData.faqSection?.bottomText}
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg"
            >
              {homeData.faqSection?.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {homeData.ctaSection?.title}
          </h2>

          <p className="text-lg mb-10">{homeData.ctaSection?.subtitle}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            {homeData.ctaSection?.buttons?.map((btn, index) => (
              <button
                key={index}
                onClick={() => setShowPopup(true)}
                className="border-2 border-white py-3 px-10 rounded-full"
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Home;
