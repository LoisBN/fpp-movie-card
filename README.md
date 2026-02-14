# Movie Card — Your First React Component

Create your first React component — a movie card that displays a poster, title, year, and rating.

## What You'll Learn

- JSX syntax and component structure
- Rendering data in components
- Tailwind CSS styling in React

## Tech Stack

- **React Router v7** (framework mode) — handles pages and routing
- **Supabase** — database and auth (pre-configured client)
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-movie-card.git
cd fpp-movie-card

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
app/
├── routes/
│   └── home.tsx          ← Movie card component and display
├── lib/
│   └── supabase.ts       ← Supabase client setup
├── app.css               ← Global styles (Tailwind)
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions
```

## Your Exercise Tasks

See the exercise instructions on the course platform for the full task list. The short version:

1. Clone the repo and run the dev server
2. Build a MovieCard component with JSX
3. Add a star rating display
4. Style with Tailwind CSS

## Hints

- Use JSX syntax to render HTML elements
- Props allow you to pass data to your components
- Tailwind utility classes make styling quick and easy

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
