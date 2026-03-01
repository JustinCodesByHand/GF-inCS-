export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Good morning 👋</h1>
        <p className="text-gray-500 text-sm mt-1">How are you feeling today?</p>
      </div>

      {/* Quick check-in prompt */}
      <div className="rounded-2xl bg-rose-50 border border-rose-100 p-6 flex items-center justify-between">
        <div>
          <p className="font-semibold text-rose-700">You haven&apos;t checked in today</p>
          <p className="text-sm text-rose-500">Take 30 seconds to log your mood</p>
        </div>
        <a
          href="/check-in"
          className="bg-rose-500 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-rose-600 transition-colors"
        >
          Check In
        </a>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Day streak", value: "—" },
          { label: "Entries this week", value: "—" },
          { label: "Avg mood", value: "—" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white border border-gray-100 p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent journal entries */}
      <div>
        <h2 className="text-base font-semibold text-gray-700 mb-3">Recent Journal Entries</h2>
        <div className="rounded-2xl bg-white border border-gray-100 p-6 text-center text-gray-400 text-sm shadow-sm">
          No entries yet. Start writing in the{" "}
          <a href="/journal" className="text-rose-500 underline">Journal</a>.
        </div>
      </div>
    </div>
  );
}