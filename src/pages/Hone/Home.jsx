// Home.jsx
import React, { useState, useEffect } from "react"; // <-- Add useEffect import
import { motion, AnimatePresence } from "framer-motion"; // <-- Add AnimatePresence import
import ContactPopup from "../../Components/ContactPopup";

// Import your images
import img1 from "../../assets/img/img1.jpeg"; // <-- Fix image import paths
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/img4.jpeg";
import img5 from "../../assets/img/img5.jpeg";
import img6 from "../../assets/img/img6.jpeg";
import img7 from "../../assets/img/img7.jpeg";
import img8 from "../../assets/img/img8.jpeg";

// ========================== DATA ==========================
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

// ========================== COMPONENT ==========================
const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // <-- Move currentIndex here

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Hero data for the Hero section
  const heroData = {
    title: "Empowering Students for Success",
    subtitle:
      "Join Diksha Classes and unlock your true academic potential with expert guidance, personalized mentorship, and proven results.",
    buttonText: "Get Started",
  };

  const featuresData = [
    {
      id: 1,
      icon: "🎓",
      title: "Expert Faculty",
      desc: "PhD & IIT alumni with 10+ years of teaching experience",
    },
    {
      id: 2,
      icon: "📘",
      title: "Personalized Learning",
      desc: "Custom study plans and 1:1 mentorship sessions",
    },
    {
      id: 3,
      icon: "🏆",
      title: "98% Success Rate",
      desc: "Consistent top ranks in boards & competitive exams",
    },
    {
      id: 4,
      icon: "🏫",
      title: "Modern Facilities",
      desc: "Smart classrooms & advanced learning resources",
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      name: "Rahul Sharma",
      role: "JEE Advanced 2023",
      quote: "Diksha's faculty gave me conceptual clarity to secure AIR 287.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
      name: "Priya Patel",
      role: "NEET 2023",
      quote: "Personalized mentorship improved my rank by 4000 positions.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&h=200&q=80",
      name: "Ananya Verma",
      role: "Class 12 Boards",
      quote: "Scored 98% in CBSE Boards with their study material & guidance.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      name: "Aryan Khanna",
      role: "Class 10 Boards",
      quote:
        "Secured 97% with their comprehensive study material and doubt sessions.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0e1601d?auto=format&fit=crop&w=200&h=200&q=80",
      name: "Neha Gupta",
      role: "KVPY Scholar",
      quote:
        "The research guidance helped me secure KVPY fellowship with AIR 42.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
      name: "Rohan Desai",
      role: "JEE Mains 2023",
      quote: "Improved from 85 to 99 percentile in just 6 months!",
    },
  ];

  const galleryData = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Campus 1",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Campus 2",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Campus 3",
    },
  ];

  const ctaData = {
    title: "Ready to Transform Your Academic Journey?",
    subtitle:
      "Limited seats available for 2024-25 batch. Enroll now for exclusive benefits!",
    buttons: [{ id: 2, text: "Schedule Campus Visit" }],
  };

  // NEW DATA SECTIONS
  const ourStoryData = {
    title: "Our Journey of Excellence",
    description:
      "Founded in 2008 , Diksha Classes has transformed from a small coaching center to a premier educational institution. Our mission is to democratize quality education through innovative teaching methodologies that make complex concepts accessible to all students.",
    stats: [
      { value: "15+", label: "Years of Excellence" },
      { value: "10,000+", label: "Students Transformed" },
      { value: "50+", label: "Expert Faculty" },
      { value: "12", label: "Centers Nationwide" },
    ],
    image:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  };

  const coursesData = [
    {
      id: 1,
      title: "JEE (Main + Advanced)",
      description:
        "Comprehensive program with 1000+ hours of intensive training",
      duration: "2 Years",
      highlights: [
        "Daily practice tests",
        "IIT alumni mentorship",
        "AIR prediction tests",
      ],
    },
    {
      id: 2,
      title: "NEET UG",
      description: "Biology-focused curriculum with NCERT reinforcement",
      duration: "2 Years",
      highlights: [
        "Special anatomy workshops",
        "Medical professional interactions",
        "Previous year paper analysis",
      ],
    },
    {
      id: 3,
      title: "Foundation (Classes 9-10)",
      description: "Building strong fundamentals for future competitive exams",
      duration: "2 Years",
      highlights: [
        "Olympiad preparation",
        "Concept visualization labs",
        "Science projects",
      ],
    },
    {
      id: 4,
      title: "Olympiad Excellence",
      description: "Specialized training for international science olympiads",
      duration: "1 Year",
      highlights: [
        "Problem-solving workshops",
        "Previous IOQ papers",
        "International exposure",
      ],
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "What makes Diksha different from other coaching institutes?",
      answer:
        "Our unique teaching methodology combines concept visualization, application workshops, and continuous assessment. We maintain a 1:15 teacher-student ratio for personalized attention and have developed proprietary learning materials that simplify complex concepts.",
    },
    {
      id: 2,
      question: "Do you provide scholarships?",
      answer:
        "Yes, we offer merit-based scholarships up to 100% tuition fee waiver for top performers in our entrance test. We also have need-based scholarships for economically disadvantaged students. Over 35% of our students receive some form of financial assistance.",
    },
    {
      id: 3,
      question: "How are parents kept informed about progress?",
      answer:
        "We provide monthly performance reports, conduct quarterly parent-teacher meetings, and offer 24/7 access to our student portal with real-time progress tracking. Parents also receive SMS alerts about test schedules and important announcements.",
    },
    {
      id: 4,
      question: "What safety measures do you have?",
      answer:
        "Our campuses have CCTV surveillance, biometric attendance, dedicated female staff, and medical facilities. We follow strict protocols for student safety including background-verified staff, secure transportation options, and anti-bullying policies.",
    },
    {
      id: 5,
      question: "How do you handle different learning paces?",
      answer:
        "We use adaptive learning technology that customizes study plans based on individual progress. Our foundation program includes remedial classes for struggling students and advanced modules for quick learners, ensuring every student reaches their potential.",
    },
  ];

  const teamData = [
    {
      id: 1,
      name: "Dr. Vikram Mehta",
      role: "Physics Expert",
      qualification: "PhD (IIT Delhi), 15+ years experience",
      specialty: "Mechanics & Modern Physics",
    },
    {
      id: 2,
      name: "Prof. Anjali Rao",
      role: "Chemistry HOD",
      qualification: "MSc (IISc Bangalore), 12+ years experience",
      specialty: "Organic Chemistry & Reaction Mechanisms",
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      role: "Mathematics Mentor",
      qualification: "PhD (IIT Kanpur), 18+ years experience",
      specialty: "Calculus & Algebra",
    },
    {
      id: 4,
      name: "Dr. Priya Singh",
      role: "Biology Director",
      qualification: "PhD (AIIMS), 14+ years experience",
      specialty: "Genetics & Human Physiology",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            {heroData.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-200 mt-6 mb-10 max-w-2xl mx-auto"
          >
            {heroData.subtitle}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition"
          >
            {heroData.buttonText}
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
            Why Choose <span className="text-indigo-600">Diksha Classes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
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

      {/* Our Story Section
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={ourStoryData.image} 
                alt="Our Story" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {ourStoryData.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {ourStoryData.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ourStoryData.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setShowPopup(true)}
                className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="py-20 px-6 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img
                src={ourStoryData.image}
                alt="Our Story"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {ourStoryData.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {ourStoryData.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ourStoryData.stats.map((stat, index) => (
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
                className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Student Success Stories
          </h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Hear from students who turned their dreams into reality with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-indigo-600 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Offerings Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Premier Programs
          </h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Specialized courses designed for maximum academic impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coursesData.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                {/* Content Section */}
                <div className="p-6 border-b-4 border-indigo-500 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="text-indigo-600 font-semibold mb-4">
                    Duration: {course.duration}
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button Sticks to Bottom */}
                <button
                  onClick={() => setShowPopup(true)}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
                >
                  Request Syllabus
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Meet Our Expert Faculty
          </h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Renowned educators with proven track records of student success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
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

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
            Our Learning Environment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryData.map((g) => (
              <motion.div
                key={g.id}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  className="w-full h-64 object-cover transform transition duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our programs and admission
              process
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-semibold text-lg text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-indigo-600 text-2xl">
                    {activeFaq === faq.id ? "-" : "+"}
                  </span>
                </button>

                {activeFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-white"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Still have questions? Our admission counselors are ready to help
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            {ctaData.title}
          </h2>
          <p className="text-lg text-indigo-100 mb-10">{ctaData.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            {ctaData.buttons.map((btn) => (
              <button
                onClick={() => setShowPopup(true)}
                key={btn.id}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full text-lg hover:cursor-pointer hover:bg-white/10 transition"
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Home;
