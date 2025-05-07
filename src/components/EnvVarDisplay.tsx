// src/components/EnvVarDisplay.tsx

import React from "react";

interface EnvVarDisplayProps {
  envVars: Record<string, string>;
}

const EnvVarDisplay: React.FC<EnvVarDisplayProps> = ({ envVars }) => {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded border">
      <h4 className="font-semibold mb-2">Required Environment Variables</h4>
      <ul className="text-sm">
        {Object.entries(envVars).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnvVarDisplay;
