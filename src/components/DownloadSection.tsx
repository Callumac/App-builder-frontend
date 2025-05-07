"use client";
import React from "react";

interface DownloadSectionProps {
  downloadUrl: string;
  filename: string;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ downloadUrl, filename }) => {
  return (
    <div className="mt-4 bg-green-100 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Your app is ready!</h2>
      <a
        href={downloadUrl}
        download={filename}
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Download: {filename}
      </a>
    </div>
  );
};
