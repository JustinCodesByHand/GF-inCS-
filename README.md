# GF-inCS

An emotional vulnerability productivity app. Inspired by my gf.

## What it does

A safe space for users to check in with their emotions daily, write journal entries, and eventually connect with others through a community message board.

## Stack

| Layer | Tech | Hosting |
|---|---|---|
| Frontend | Next.js 14 + TypeScript + Tailwind | Vercel |
| Backend API | Go (Gin/Echo) | Railway |
| Database + Auth | Supabase (PostgreSQL + Realtime) | Supabase |

## Project Structure

```
GF-inCS-/
├── frontend/          # Next.js app
│   └── src/
│       ├── app/
│       │   ├── page.tsx          # Dashboard
│       │   ├── check-in/         # Daily mood check-in
│       │   ├── journal/          # Journal entries
│       │   ├── board/            # Community message board (coming soon)
│       │   └── profile/          # User profile & settings
│       ├── components/
│       │   └── Nav.tsx
│       └── lib/
│           └── supabase/         # Supabase client (browser + server)
└── docs/
    └── supabase-setup.md         # Database & auth setup notes
```

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Add your Supabase credentials to `frontend/.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Roadmap

- [ ] Supabase Auth (email + OAuth)
- [ ] Check-in data persistence
- [ ] Journal entry storage
- [ ] Mood history + streak tracking
- [ ] Community message board (Supabase Realtime)
- [ ] Go backend API
