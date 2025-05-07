"use client";

import { useEffect, useState } from "react";
import { getTemplates } from "@/lib/api";
import TemplateCard from "@/components/TemplateCard";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const data = await getTemplates();
        setTemplates(data);
      } catch (err) {
        console.error("Failed to fetch templates:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">App Templates</h2>

      {loading ? (
        <div className="text-center text-gray-400">Loading templates...</div>
      ) : templates.length === 0 ? (
        <div className="text-center text-gray-400">No templates available yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template: any) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      )}
    </main>
  );
}
