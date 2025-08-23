import { useState } from "react";
import {
  FaChalkboardTeacher,
  FaAward,
  FaUserGraduate,
  FaQuoteLeft,
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarker,
  FaGraduationCap,
  FaTrophy,
  FaLightbulb,
  FaBookOpen,
  FaUsers,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import { MdSchool, MdGroups } from "react-icons/md";
import ContactPopup from "../../Components/ContactPopup";
import PersonImg from "../../assets/Person.jpeg"; // replace with your image path

const About = () => {
  const stats = [
    { icon: FaUsers, number: "5000+", label: "Students Taught" },
    { icon: FaGraduationCap, number: "95%", label: "Success Rate" },
    { icon: FaAward, number: "15+", label: "Years Experience" },
    { icon: FaChalkboardTeacher, number: "50+", label: "Expert Faculty" },
    { icon: FaBookOpen, number: "100+", label: "Courses Offered" },
    { icon: FaTrophy, number: "200+", label: "Top Rankers" },
  ];

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-r from-indigo-900 to-purple-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Transforming Education <br />
                <span className="text-amber-400">Since 2010</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Premier coaching institute providing quality education with
                personalized attention
              </p>
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3"
                    >
                      <Icon className="text-white text-3xl" />
                      <div>
                        <p className="text-3xl font-bold text-white">
                          {stat.number}
                        </p>
                        <p className="text-white">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-700 h-64 rounded-2xl flex items-center justify-center">
                <MdSchool className="text-6xl text-amber-400" />
              </div>
              <div className="bg-amber-400 h-40 rounded-2xl mt-[96px] flex items-center justify-center">
                <FaBookOpen className="text-6xl text-indigo-900" />
              </div>
              <div className="bg-amber-400 h-40 rounded-2xl flex items-center justify-center">
                <FaLightbulb className="text-6xl text-indigo-900" />
              </div>
              <div className="bg-indigo-700 h-64 rounded-2xl flex items-center justify-center">
                <MdGroups className="text-6xl text-amber-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-400/20"></div>
      </section>

      {/* Director Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 overflow-hidden">
                  <img
                    src={PersonImg}
                    alt="Person"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-800 text-white py-4 px-6 rounded-lg">
                  <p className="font-bold text-lg">Dilip Kumar</p>
                  <p className="text-amber-400">Founder & Director</p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Message from{" "}
                <span className="text-indigo-700">Our Director</span>
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  "Education is not just about academic success; it's about
                  shaping character and building futures. For over a decade,
                  Diksha Classes has been committed to providing transformative
                  learning experiences."
                </p>
                <p>
                  Our unique teaching methodology focuses on conceptual clarity,
                  critical thinking, and personalized mentorship. We take pride
                  in seeing our students excel not just in examinations, but in
                  all their future endeavors.
                </p>
                <p>
                  At Diksha, we don't just teach subjects - we mentor future
                  leaders."
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <FaAward className="text-indigo-700 text-xl" />
                  </div>
                  <p className="font-medium">15+ Years Experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <FaUserGraduate className="text-amber-600 text-xl" />
                  </div>
                  <p className="font-medium">M.Tech, IIT Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Diksha Classes?</span>
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a unique blend of experienced faculty, proven
            methodologies, and personalized attention to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-indigo-700 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-blue-600">Students Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who have achieved their dreams
              with Diksha Classes.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <FaQuoteLeft className="text-2xl text-blue-600 mr-4" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div>
                  <h5 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h5>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their dreams
            with Diksha Classes.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <FaPhoneAlt className="text-3xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Call Us
              </h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Email Us
              </h4>
              <p className="text-gray-600">dikshaclasses312@gmail.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <FaMapMarker className="text-3xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Us
              </h4>
              <p className="text-gray-600">123 Education Street, City</p>
            </div>
          </div>

          {/* Get Started Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

// Data for features
const features = [
  {
    icon: <FaChalkboardTeacher className="text-4xl" />,
    title: "Expert Faculty",
    description:
      "Highly qualified teachers with subject matter expertise and passion for teaching",
  },
  {
    icon: <FaBookOpen className="text-4xl" />,
    title: "Personalized Learning",
    description:
      "Customized study plans based on individual learning styles and pace",
  },
  {
    icon: <FaLightbulb className="text-4xl" />,
    title: "Conceptual Clarity",
    description: "Focus on fundamental understanding rather than rote learning",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "JEE Advanced Qualifier",
    text: "Diksha Classes transformed my understanding of Physics and Mathematics. The teaching methodology is exceptional.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    role: "NEET Qualifier",
    text: "The dedication of teachers at Diksha Classes is unmatched. They helped me achieve my dream of becoming a doctor.",
    rating: 5,
  },
  {
    name: "Anita Singh",
    role: "Board Topper",
    text: "Best coaching institute in the city. The study material and regular tests prepared me well for board exams.",
    rating: 5,
  },
];

export default About;
