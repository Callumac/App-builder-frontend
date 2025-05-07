"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/api";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalApps: 0,
    totalTemplates: 0,
    totalClients: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white py-10 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading stats...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Total Apps</h2>
            <p className="text-3xl font-bold">{stats.totalApps}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Templates</h2>
            <p className="text-3xl font-bold">{stats.totalTemplates}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Clients</h2>
            <p className="text-3xl font-bold">{stats.totalClients}</p>
          </div>
        </div>
      )}
    </main>
  );
}
