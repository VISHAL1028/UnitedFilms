import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { uploadFile } from "@/lib/upload";
import {
  saveEquipment,
  getAllEquipment,
  deleteEquipment,
  updateEquipment,
} from "@/lib/db";
import {
  ArrowLeft,
  Trash2,
  Pencil,
  ImagePlus,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  "Cameras",
  "Lenses",
  "Color Grading & VFX",
  "Film Scanners & Restoration",
  "Film Processing & Lab",
  "Projectors",
  "Support Equipment",
  "Storage & Systems",
];

const emptyForm = { name: "", category: CATEGORIES[0], description: "", file: null };

const EquipmentForm = () => {
  const [form, setForm] = useState(emptyForm);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loadingItems, setLoadingItems] = useState(true);

  const fetchItems = async () => {
    setLoadingItems(true);
    try {
      const data = await getAllEquipment();
      setItems(data);
    } catch {
      toast.error("Failed to load equipment from Firestore.");
    } finally {
      setLoadingItems(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setForm((p) => ({ ...p, file: f }));
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category) {
      toast.error("Name and category are required.");
      return;
    }

    setLoading(true);
    setProgress(0);
    try {
      let imageUrl = form.imageUrl || "";

      if (form.file) {
        imageUrl = await uploadFile(form.file, "equipment", setProgress);
      }

      const payload = {
        name: form.name,
        category: form.category,
        description: form.description,
        imageUrl,
      };

      if (editId) {
        await updateEquipment(editId, payload);
        toast.success("Equipment updated ✅");
      } else {
        await saveEquipment(payload);
        toast.success("Equipment added ✅");
      }

      setForm(emptyForm);
      setPreview(null);
      setEditId(null);
      await fetchItems();
    } catch (err) {
      toast.error("Upload failed: " + err.message);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm({
      name: item.name,
      category: item.category,
      description: item.description || "",
      file: null,
      imageUrl: item.imageUrl,
    });
    setPreview(item.imageUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
      await deleteEquipment(id);
      toast.success(`"${name}" deleted.`);
      await fetchItems();
    } catch {
      toast.error("Delete failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-xl px-8 py-5 flex items-center gap-4">
        <Link to="/admin" className="text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <span className="font-semibold tracking-wide text-lg">Equipment Manager</span>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14">
        {/* Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-8">
            {editId ? "✏️ Edit Equipment" : "➕ Add Equipment"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                  Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. ARRI 435 Film Camera"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 transition-colors placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                  Category *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 transition-colors"
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                rows={3}
                placeholder="Short product description…"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 transition-colors placeholder:text-gray-600 resize-none"
              />
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                Image
              </label>
              <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/10 rounded-xl p-8 cursor-pointer hover:border-amber-500/40 transition-colors">
                {preview ? (
                  <img src={preview} alt="preview" className="h-32 object-contain rounded-lg" />
                ) : (
                  <ImagePlus className="w-8 h-8 text-gray-600" />
                )}
                <span className="text-xs text-gray-500">
                  {form.file ? form.file.name : "Click to select image"}
                </span>
                <input type="file" accept="image/*,video/*" className="hidden" onChange={handleFile} />
              </label>
            </div>

            {/* Progress bar */}
            {loading && progress > 0 && (
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-amber-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                {loading ? "Uploading…" : editId ? "Update" : "Add Equipment"}
              </button>
              {editId && (
                <button
                  type="button"
                  onClick={() => { setForm(emptyForm); setPreview(null); setEditId(null); }}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  <XCircle className="w-4 h-4" /> Cancel
                </button>
              )}
            </div>
          </form>
        </motion.section>

        {/* Items list */}
        <section>
          <h2 className="text-xl font-bold mb-6">All Equipment ({items.length})</h2>
          {loadingItems ? (
            <div className="flex items-center gap-2 text-gray-500 py-10">
              <Loader2 className="w-5 h-5 animate-spin" /> Loading…
            </div>
          ) : items.length === 0 ? (
            <p className="text-gray-500 text-sm py-10">No equipment added yet. Use the form above to add your first item.</p>
          ) : (
            <div className="space-y-3">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-14 h-14 object-contain rounded-lg bg-black/40 shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id, item.name)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default EquipmentForm;
