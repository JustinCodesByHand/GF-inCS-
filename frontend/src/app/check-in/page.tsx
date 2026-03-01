"use client";

import { useState } from "react";

const moods = [
  { emoji: "😊", label: "Happy", value: 5 },
  { emoji: "🙂", label: "Okay", value: 4 },
  { emoji: "😐", label: "Neutral", value: 3 },
  { emoji: "😔", label: "Down", value: 2 },
  { emoji: "😢", label: "Low", value: 1 },
];

export default function CheckIn() {
  const [selected, setSelected] = useState<number | null>(null);
  const [note, setNote] = useState("");

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Daily Check-In</h1>
        <p className="text-gray-500 text-sm mt-1">How are you feeling right now?</p>
      </div>

      {/* Mood selector */}
      <div className="flex justify-between gap-2">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setSelected(mood.value)}
            className={`flex flex-col items-center gap-1 flex-1 rounded-2xl py-4 border-2 transition-all ${
              selected === mood.value
                ? "border-rose-400 bg-rose-50"
                : "border-gray-100 bg-white hover:border-rose-200"
            }`}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-xs text-gray-500">{mood.label}</span>
          </button>
        ))}
      </div>

      {/* Optional note */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Anything on your mind? <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write freely..."
          className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <button
        disabled={selected === null}
        className="w-full bg-rose-500 text-white font-medium py-3 rounded-2xl hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Save Check-In
      </button>
    </div>
  );
}
