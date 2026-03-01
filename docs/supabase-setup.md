# Supabase Setup Notes

Reference for setting up the database schema and auth configuration.

---

## Step 4 — Create Tables

Go to **Table Editor → New Table** in the Supabase dashboard.

### `check_ins`

| column | type | notes |
|---|---|---|
| `id` | uuid | primary key, default `gen_random_uuid()` |
| `user_id` | uuid | references `auth.users` |
| `mood` | int2 | 1–5 scale |
| `note` | text | nullable |
| `created_at` | timestamptz | default `now()` |

### `journal_entries`

| column | type | notes |
|---|---|---|
| `id` | uuid | primary key, default `gen_random_uuid()` |
| `user_id` | uuid | references `auth.users` |
| `title` | text | nullable |
| `body` | text | |
| `created_at` | timestamptz | default `now()` |

### `posts` *(message board — build later)*

| column | type | notes |
|---|---|---|
| `id` | uuid | primary key |
| `user_id` | uuid | references `auth.users` |
| `content` | text | |
| `created_at` | timestamptz | default `now()` |

### `replies` *(message board — build later)*

| column | type | notes |
|---|---|---|
| `id` | uuid | primary key |
| `post_id` | uuid | references `posts.id` |
| `user_id` | uuid | references `auth.users` |
| `content` | text | |
| `created_at` | timestamptz | default `now()` |

---

## Step 5 — Enable Row Level Security (RLS)

For **each table**: Table Editor → select table → **RLS → Enable RLS**, then add a policy.

```sql
-- Users can only read/write their own rows (run once per table)
create policy "own rows only"
on check_ins
for all
using (auth.uid() = user_id);
```

Repeat for `journal_entries`, `posts`, and `replies`. Without this, any authenticated user can read everyone's data.

---

## Step 6 — Test the Connection

Once keys are in `frontend/.env.local`, add this temporarily to a Server Component or API route to verify:

```ts
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
console.log(user); // null until logged in — but no error means it's working
```

---

## Next: Auth

The next build step is a login/signup page wired to Supabase Auth.

```ts
// Sign up
const { error } = await supabase.auth.signUp({ email, password });

// Sign in
const { error } = await supabase.auth.signInWithPassword({ email, password });

// Sign out
await supabase.auth.signOut();
```

Use `src/lib/supabase/client.ts` for these calls (browser-side).
