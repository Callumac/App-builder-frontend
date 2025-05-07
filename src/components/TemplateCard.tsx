"use client";

import React from "react";

interface TemplateCardProps {
  title: string;
  description: string;
  previewImage: string;
  downloadUrl: string;
}

export function TemplateCard({
  title,
  description,
  previewImage,
  downloadUrl,
}: TemplateCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={previewImage}
        alt={`${title} preview`}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}
