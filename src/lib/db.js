import { db } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

// ─── EQUIPMENT ────────────────────────────────────────────────────────────────

export const saveEquipment = (data) =>
  addDoc(collection(db, "equipment"), { ...data, createdAt: serverTimestamp() });

export const updateEquipment = (id, data) =>
  updateDoc(doc(db, "equipment", id), data);

export const deleteEquipment = (id) =>
  deleteDoc(doc(db, "equipment", id));

export const getAllEquipment = async () => {
  const snap = await getDocs(
    query(collection(db, "equipment"), orderBy("createdAt", "desc"))
  );
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ─── WORKSHOPS ────────────────────────────────────────────────────────────────

export const saveWorkshop = (data) =>
  addDoc(collection(db, "workshops"), { ...data, createdAt: serverTimestamp() });

export const updateWorkshop = (id, data) =>
  updateDoc(doc(db, "workshops", id), data);

export const deleteWorkshop = (id) =>
  deleteDoc(doc(db, "workshops", id));

export const getAllWorkshops = async () => {
  const snap = await getDocs(
    query(collection(db, "workshops"), orderBy("createdAt", "desc"))
  );
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};
