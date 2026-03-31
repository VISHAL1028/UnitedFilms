import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

/**
 * Uploads a File to Firebase Storage and returns the public download URL.
 * @param {File} file - The file to upload
 * @param {string} folder - Storage folder, e.g. "equipment" or "workshops"
 * @param {(progress: number) => void} [onProgress] - Optional callback with 0-100 progress
 * @returns {Promise<string>} Public download URL
 */
export const uploadFile = (file, folder = "uploads", onProgress) => {
  return new Promise((resolve, reject) => {
    const safeName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const storageRef = ref(storage, `${folder}/${safeName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        onProgress?.(progress);
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      }
    );
  });
};
