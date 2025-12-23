import React, { useState } from "react";
import axios from "axios";
import { 
  FaFileWord, 
  FaCloudUploadAlt, 
  FaCheckCircle, 
  FaDownload 
} from "react-icons/fa";


const Converter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setSuccess("");
    setError("");
    setDownloadUrl(null);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    setSuccess("");
    setError("");
    setDownloadUrl(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/convertFile",
        formData,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      setDownloadUrl(url);

      const fileName = selectedFile.name.replace(/\.[^.]+$/, "") + ".pdf";

      // Instant Download Logic
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess("File converted successfully!");

    } catch (err) {
      console.error(err);
      setError("Conversion failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 bg-slate-50 flex justify-center items-start">
      <div className="glass-panel p-10 rounded-2xl shadow-2xl w-full max-w-xl text-center transition-all">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Convert Word to PDF</h2>
        <p className="text-slate-500 mb-8">Upload your .docx file to convert it instantly.</p>

        <div className="relative group">
          <input
            type="file"
            accept=".docx"
            hidden
            id="file"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file"
            className={`cursor-pointer flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl transition-all duration-300 ${selectedFile
              ? "border-indigo-400 bg-indigo-50/50"
              : "border-slate-300 hover:border-indigo-400 hover:bg-slate-50"
              }`}
          >
            {selectedFile ? (
  <div className="text-indigo-600 transition-all duration-300">
    <FaFileWord className="text-6xl mx-auto mb-4" />
    <span className="font-semibold text-lg">{selectedFile.name}</span>
    <p className="text-sm text-indigo-400 mt-2">Click to change file</p>
  </div>
) : (
  <div className="text-slate-400 group-hover:text-indigo-500 transition-colors">
    <FaCloudUploadAlt className="text-6xl mx-auto mb-4" />
    <span className="font-medium text-lg">Click to Upload</span>
    <p className="text-sm mt-2">or drag and drop Word files here</p>
  </div>
)}

          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedFile || loading}
          className={`w-full mt-8 btn-primary flex items-center justify-center gap-3 text-lg ${!selectedFile || loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Converting...
            </>
          ) : (
            "Convert to PDF"
          )}
        </button>

        {success && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium flex flex-col items-center transition-all">
            <div className="flex items-center gap-2 mb-2">
              <FaCheckCircle /> {success}
            </div>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download={selectedFile?.name?.replace(/\.[^.]+$/, "") + ".pdf"}
                className="text-sm underline hover:text-green-800 flex items-center gap-1"
              >
                <FaDownload size={12} /> Click here if download didn't start
              </a>
            )}
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium transition-all">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;
