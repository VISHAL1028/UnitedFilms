import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { uploadFile } from "@/lib/upload";
import {
  saveWorkshop,
  getAllWorkshops,
  deleteWorkshop,
  updateWorkshop,
} from "@/lib/db";
import {
  ArrowLeft,
  Trash2,
  Pencil,
  ImagePlus,
  Loader2,
  CheckCircle2,
  XCircle,
  Video,
} from "lucide-react";
import { toast } from "sonner";

const emptyForm = { title: "", description: "", file: null };

const WorkshopForm = () => {
  const [form, setForm] = useState(emptyForm);
  const [preview, setPreview] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loadingItems, setLoadingItems] = useState(true);

  const fetchItems = async () => {
    setLoadingItems(true);
    try {
      const data = await getAllWorkshops();
      setItems(data);
    } catch {
      toast.error("Failed to load workshops from Firestore.");
    } finally {
      setLoadingItems(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const video = f.type.startsWith("video/");
    setIsVideo(video);
    setForm((p) => ({ ...p, file: f }));
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) { toast.error("Title is required."); return; }
    setLoading(true);
    setProgress(0);
    try {
      let mediaUrl = form.mediaUrl || "";
      if (form.file) {
        mediaUrl = await uploadFile(form.file, "workshops", setProgress);
      }

      const payload = {
        title: form.title,
        description: form.description,
        mediaUrl,
        mediaType: isVideo ? "video" : "image",
      };

      if (editId) {
        await updateWorkshop(editId, payload);
        toast.success("Workshop updated ✅");
      } else {
        await saveWorkshop(payload);
        toast.success("Workshop added ✅");
      }

      setForm(emptyForm);
      setPreview(null);
      setEditId(null);
      setIsVideo(false);
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
      title: item.title,
      description: item.description || "",
      file: null,
      mediaUrl: item.mediaUrl,
    });
    setPreview(item.mediaUrl);
    setIsVideo(item.mediaType === "video");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"?`)) return;
    try {
      await deleteWorkshop(id);
      toast.success(`"${title}" deleted.`);
      await fetchItems();
    } catch {
      toast.error("Delete failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-xl px-8 py-5 flex items-center gap-4">
        <Link to="/admin" className="text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <span className="font-semibold tracking-wide text-lg">Workshop Manager</span>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14">
        {/* Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-8">
            {editId ? "✏️ Edit Workshop" : "➕ Add Workshop"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                Title *
              </label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                placeholder="e.g. Advanced Film Scanning Workshop"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500/60 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                rows={3}
                placeholder="What will participants learn?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500/60 transition-colors placeholder:text-gray-600 resize-none"
              />
            </div>

            {/* Media upload */}
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest">
                Image or Video
              </label>
              <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/10 rounded-xl p-8 cursor-pointer hover:border-sky-500/40 transition-colors">
                {preview ? (
                  isVideo ? (
                    <video src={preview} className="h-32 rounded-lg object-contain" controls />
                  ) : (
                    <img src={preview} alt="preview" className="h-32 object-contain rounded-lg" />
                  )
                ) : (
                  <div className="flex gap-3 text-gray-600">
                    <ImagePlus className="w-7 h-7" />
                    <Video className="w-7 h-7" />
                  </div>
                )}
                <span className="text-xs text-gray-500">
                  {form.file ? form.file.name : "Click to select image or video"}
                </span>
                <input type="file" accept="image/*,video/*" className="hidden" onChange={handleFile} />
              </label>
            </div>

            {loading && progress > 0 && (
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-sky-400 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                {loading ? "Uploading…" : editId ? "Update" : "Add Workshop"}
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
          <h2 className="text-xl font-bold mb-6">All Workshops ({items.length})</h2>
          {loadingItems ? (
            <div className="flex items-center gap-2 text-gray-500 py-10">
              <Loader2 className="w-5 h-5 animate-spin" /> Loading…
            </div>
          ) : items.length === 0 ? (
            <p className="text-gray-500 text-sm py-10">No workshops added yet.</p>
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
                    {item.mediaUrl && item.mediaType !== "video" && (
                      <img
                        src={item.mediaUrl}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-lg bg-black/40 shrink-0"
                      />
                    )}
                    {item.mediaType === "video" && (
                      <div className="w-14 h-14 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                        <Video className="w-6 h-6 text-sky-400" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">{item.description}</p>
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
                        onClick={() => handleDelete(item.id, item.title)}
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

export default WorkshopForm;
