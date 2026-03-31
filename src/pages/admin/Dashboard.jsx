import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, BookOpen, LayoutDashboard, ChevronRight } from "lucide-react";

const cards = [
  {
    to: "/admin/equipment",
    icon: Camera,
    title: "Manage Equipment",
    desc: "Add, edit, or delete equipment items and upload images to Firebase Storage.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    to: "/admin/workshop",
    icon: BookOpen,
    title: "Manage Workshops",
    desc: "Add, edit, or delete workshop programmes and upload media.",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    iconColor: "text-sky-400",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      {/* Top bar */}
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-xl px-8 py-5 flex items-center gap-3">
        <LayoutDashboard className="w-5 h-5 text-amber-400" />
        <span className="font-semibold tracking-wide text-lg">Admin Panel</span>
        <span className="ml-auto text-xs text-gray-500 font-mono">United Films CMS</span>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-xl">
            Manage your equipment catalogue and workshop programmes. All media is
            stored in{" "}
            <span className="text-amber-400 font-medium">Firebase Storage</span>{" "}
            — no large files in GitHub.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map(({ to, icon: Icon, title, desc, color, border, iconColor }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <Link
                to={to}
                className={`group block p-7 rounded-2xl border ${border} bg-linear-to-br ${color} hover:brightness-110 transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{desc}</p>
                <span className="flex items-center gap-1 text-xs font-medium text-gray-300 group-hover:gap-2 transition-all">
                  Open <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
