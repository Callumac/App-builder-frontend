"use client";

import { useState } from "react";
import { generateApp } from "@/lib/api";

export default function BuildPage() {
  const [platform, setPlatform] = useState("android");
  const [appName, setAppName] = useState("");
  const [features, setFeatures] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setDownloadUrl("");

    try {
      const res = await generateApp({ platform, appName, features });
      setDownloadUrl(res.downloadUrl);
    } catch (err) {
      alert("Something went wrong while generating your app.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen py-12 px-6 bg-gray-950 text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Build Your App</h2>
        
        {/* Builder Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">App Name</label>
            <input
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              placeholder="MyCoolApp"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              <option value="android">Android (.apk)</option>
              <option value="windows">Windows (.exe)</option>
              <option value="web">Web App (.zip)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">App Features</label>
            <textarea
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              placeholder="e.g. automation, login, chatbot..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate App"}
          </button>
        </form>

        {/* Preview Section */}
        {(appName || features) && (
          <div className="mt-10 bg-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Preview</h3>
            <p><strong>App Name:</strong> {appName}</p>
            <p><strong>Platform:</strong> {platform}</p>
            <p><strong>Features:</strong> {features}</p>
          </div>
        )}

        {/* Result Section */}
        {downloadUrl && (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Your App is Ready!</h3>
            <a
              href={downloadUrl}
              download
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Download App
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
