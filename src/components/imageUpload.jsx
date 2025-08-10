"use client";
import { useState } from "react";

export default function ImageUpload({ returnImage, preloadedImage }) {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploaded, setUploaded] = useState(false); // Track if upload succeeded

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
    setMessage("");
    setUploaded(false); // reset on new file select
  };

  const handleUpload = async () => {
    if (!imageFile) {
      setMessage("❌ No file selected.");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "blogify");
    formData.append("cloud_name", "dvpenqpdj");

    try {
      // cloudnary link
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dvpenqpdj/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setLoading(false);

      if (data.secure_url) {
        returnImage(data.secure_url);
        setMessage("✅ Image uploaded successfully!");
        setUploaded(true); // mark uploaded
      } else {
        setMessage("❌ Upload failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMessage("❌ Something went wrong during upload.");
    }
  };

  return (
    <div className="space-y-3">
      {!uploaded && (
        <>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </>
      )}

      {(uploaded || preloadedImage) && (
        <img
          src={preview || preloadedImage}
          alt="Preview"
          className="h-40 rounded border object-cover"
        />
      )}

      {message && (
        <p
          className={`text-sm ${
            message.startsWith("✅") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
