// Home page - Welcome and Navigation

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-3xl text-center">
        <Image
          src="/logo.png"
          alt="App Builder Logo"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-full"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered App Builder
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Instantly generate full-featured apps for Android, Windows, or Web
          — no coding required. Build, customize, and download production-ready code.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/build"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
          >
            Build an App
          </Link>
          <Link
            href="/templates"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow transition"
          >
            Browse Templates
          </Link>
          <Link
            href="/dashboard"
            className="bg-transparent border border-gray-400 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-xl transition"
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
