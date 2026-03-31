import { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { equipment as staticEquipment, categories as staticCategories } from './equipmentData';
import { getAllEquipment } from '@/lib/db';

const EquipmentPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [firestoreEquipment, setFirestoreEquipment] = useState(null);

  useEffect(() => {
    getAllEquipment()
      .then((data) => { if (data.length > 0) setFirestoreEquipment(data); })
      .catch(() => {}); // silently fall back to static data
  }, []);

  const equipment = firestoreEquipment ?? staticEquipment;
  const categories = firestoreEquipment
    ? ['All', ...Array.from(new Set(firestoreEquipment.map((i) => i.category)))]
    : staticCategories;

  const filtered = useMemo(() => {
    return equipment.filter((item) => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-6 lg:px-10 max-w-7xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium border border-white/30 text-gray-300 mb-6"
          >
            Equipment Catalogue
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            OUR EQUIPMENT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            Browse our extensive inventory of professional cinema cameras, lenses, film scanners,
            projectors, and post-production systems — available for rental and production use.
          </motion.p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Result count */}
            <div className="flex items-center gap-2 text-sm text-gray-400 shrink-0">
              <SlidersHorizontal className="w-4 h-4" />
              <span>{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          {filtered.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-gray-400 text-lg mb-4">No equipment found for your search.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence>
                {filtered.map((item, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                    key={item.id}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative bg-[#111] flex items-center justify-center h-56 overflow-hidden">
                      <img
                        src={item.imageUrl || item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Category badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {item.category}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-gray-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <a
                          href="/#contact"
                          className="text-sm text-white hover:text-gray-300 flex items-center gap-2 font-medium transition-colors"
                        >
                          Enquire about rental <span className="text-xl leading-none">→</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquipmentPage;
