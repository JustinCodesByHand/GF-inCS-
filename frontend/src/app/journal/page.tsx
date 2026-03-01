"use client";

import { useState } from "react";

export default function Journal() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Journal</h1>
        <p className="text-gray-500 text-sm mt-1">Write without judgment.</p>
      </div>

      {/* New entry form */}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entry title (optional)"
          className="w-full text-lg font-semibold text-gray-800 placeholder-gray-300 focus:outline-none border-b border-gray-100 pb-2"
        />
        <textarea
          rows={8}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Start writing..."
          className="w-full text-sm text-gray-700 placeholder-gray-300 resize-none focus:outline-none"
        />
        <div className="flex justify-end">
          <button
            disabled={body.trim() === ""}
            className="bg-rose-500 text-white text-sm font-medium px-5 py-2 rounded-xl hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Save Entry
          </button>
        </div>
      </div>

      {/* Past entries list — placeholder */}
      <div>
        <h2 className="text-base font-semibold text-gray-700 mb-3">Past Entries</h2>
        <div className="rounded-2xl bg-white border border-gray-100 p-6 text-center text-gray-400 text-sm shadow-sm">
          Your entries will appear here.
        </div>
      </div>
    </div>
  );
}
