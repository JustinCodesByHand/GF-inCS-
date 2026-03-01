// TODO: Wire up to Supabase Auth — replace placeholder data with real session user

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account.</p>
      </div>

      {/* Avatar + name placeholder */}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-2xl">
          👤
        </div>
        <div>
          <p className="font-semibold text-gray-800">Your Name</p>
          <p className="text-sm text-gray-400">you@email.com</p>
        </div>
      </div>

      {/* Settings placeholders */}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm divide-y divide-gray-50">
        {["Edit Profile", "Notification Preferences", "Privacy Settings", "Sign Out"].map(
          (item) => (
            <button
              key={item}
              className="w-full text-left px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}
