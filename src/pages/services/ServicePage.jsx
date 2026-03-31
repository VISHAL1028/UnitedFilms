import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { services } from './serviceData';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* 🔥 HERO VIDEO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        {service.videoPath && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={service.videoPath} type="video/mp4" />
          </video>
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* TEXT OVER VIDEO */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-10 max-w-7xl mx-auto pt-20">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium border border-white/30 mb-6 w-fit text-gray-300"
          >
            {service.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* 🔥 FEATURES SECTION */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">WHAT'S INCLUDED</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{service.longDescription}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features && service.features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-white/50">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{item}</h3>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Professional {item.toLowerCase()} services for high-end productions.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 IMAGE + TEXT SPLIT (APPLE STYLE) */}
      {service.splitVideo && (
        <section className="grid lg:grid-cols-2 items-center gap-16 px-6 md:px-10 py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent rounded-2xl blur-xl" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative rounded-2xl shadow-2xl object-cover aspect-square md:aspect-4/3 w-full border border-white/10"
            >
              <source src={service.splitVideo} type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {service.splitSectionTitle}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {service.splitSectionText}
            </p>
            <ul className="space-y-4 mb-10">
              {service.details && service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white line-shadow" />
                  <span className="text-gray-300 font-medium">{detail}</span>
                </li>
              ))}
            </ul>
            <a href="/#contact">
              <button className="px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get a Quote
              </button>
            </a>
          </motion.div>
        </section>
      )}

      {/* 🔥 PARALLAX STYLE SECTION */}
      {service.parallaxVideo && (
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <motion.video
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-40"
          >
            <source src={service.parallaxVideo} type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
          <div className="relative z-10 text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{service.parallaxTitle}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {service.parallaxText}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServicePage;