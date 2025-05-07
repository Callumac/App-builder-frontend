"use client";

import { useState } from "react";
import { buildAppProject } from "@/lib/api";
import { Loader } from "./Loader";

export function BuilderForm() {
  const [platform, setPlatform] = useState("web");
  const [appName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await buildAppProject({
        platform,
        appName,
        description,
      });

      setResultUrl(response.downloadUrl);
    } catch (err) {
      alert("Something went wrong while building the app.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Build Your App</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">App Name</label>
        <input
          type="text"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          placeholder="My AI App"
          className="w-full border px-3 py-2 rounded-lg focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the app features..."
          className="w-full border px-3 py-2 rounded-lg focus:outline-none"
          rows={3}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        >
          <option value="web">Web App (Vercel)</option>
          <option value="android">Android APK</option>
          <option value="windows">Windows EXE</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Generate App"}
      </button>

      {resultUrl && (
        <div className="mt-4 text-center">
          <p className="font-medium">Your app is ready:</p>
          <a
            href={resultUrl}
            target="_blank"
            className="text-blue-700 underline"
            rel="noopener noreferrer"
          >
            Download App
          </a>
        </div>
      )}
    </form>
  );
}
