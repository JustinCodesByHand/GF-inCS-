// TODO: Message board — implement when Supabase Realtime is wired up
// Each post will be a row in a `posts` table (user_id, content, created_at)
// Replies will be a `replies` table (post_id, user_id, content, created_at)
// Use Supabase Realtime channels for live updates

export default function Board() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Community Board</h1>
        <p className="text-gray-500 text-sm mt-1">
          A safe space to connect with others.
        </p>
      </div>

      {/* Coming soon banner */}
      <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center space-y-2">
        <p className="text-2xl">🚧</p>
        <p className="font-semibold text-amber-700">Coming Soon</p>
        <p className="text-sm text-amber-600">
          The community board is being built. Check back later!
        </p>
      </div>
    </div>
  );
}
