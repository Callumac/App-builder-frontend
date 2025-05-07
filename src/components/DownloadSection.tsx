// src/components/DownloadSection.tsx

import React from "react";

interface DownloadSectionProps {
  result: {
    downloadUrl: string;
    appName: string;
    expiresAt: string;
    envVars: Record<string, string>;
  };
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ result }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6 mt-10">
      <h3 className="text-2xl font-semibold mb-4">
        {result.appName} is ready!
      </h3>

      <p className="text-gray-700 mb-2">
        Download Link (expires on {new Date(result.expiresAt).toLocaleString()}):
      </p>
      <a
        href={result.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-medium"
      >
        Download App
      </a>

      <div className="mt-6">
        <h4 className="font-bold mb-2">Required Environment Variables</h4>
        <ul className="bg-gray-100 p-3 rounded text-sm">
          {Object.entries(result.envVars).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadSection;
