# Movie Card — Your First React Component

Build a movie card component and learn how React components work — with AI as your coding partner.

## The Big Idea

In React, everything is a **component** — a reusable piece of UI. Think of components like LEGO bricks: you build them once, then use them as many times as you need.

In this exercise, you'll build a `<MovieCard />` component. By the end, you'll use that same component to display 3 different movies — same code, different data. That's the power of components!

## What You'll Learn

| Concept | What It Means |
|---------|---------------|
| **Components** | Reusable UI building blocks |
| **JSX** | HTML-like syntax inside JavaScript |
| **Props** | Data passed into components |
| **Tailwind CSS** | Utility classes for styling |
| **AI-Assisted Coding** | Using Claude to write code from prompts |

## How This Exercise Works

This exercise uses **AI-assisted learning**. Instead of typing code manually, you'll:

1. **Read** what each part of the component does
2. **Copy** a prompt describing what you want
3. **Paste** the prompt to Claude (AI)
4. **Review** the code Claude generates
5. **Learn** by seeing the result instantly

This mirrors how professional developers work with AI tools today.

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

## The 6 Steps

The app guides you through styling the MovieCard component step by step:

| Step | What You're Building | Concept You'll Learn |
|------|---------------------|---------------------|
| 1. Card Container | Dark background wrapper | The Container Pattern |
| 2. Movie Poster | Image with proper sizing | Aspect Ratios & Object Fit |
| 3. Title | Styled heading | Typography & Spacing |
| 4. Badges | Year and genre pills | Flexbox Layout |
| 5. Synopsis | Truncated description | Text Overflow |
| 6. Rating | Star rating display | Composing Elements |

## Project Structure

```
app/
├── components/
│   └── MovieCard.tsx     ← The component you'll style
├── data/
│   └── movies.ts         ← Movie data (title, year, poster, etc.)
├── routes/
│   └── home.tsx          ← The exercise UI
├── lib/
│   └── supabase.ts       ← Database client (for future exercises)
├── app.css               ← Global styles (Tailwind)
└── root.tsx              ← App shell
```

## Key Files to Understand

### `app/components/MovieCard.tsx`
This is the component you'll be styling. It receives a `movie` prop containing all the data:

```tsx
function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.posterUrl} />
      <h2>{movie.title}</h2>
      {/* ... more JSX */}
    </div>
  );
}
```

### `app/data/movies.ts`
The movie data that gets passed to each card:

```ts
{
  title: 'The Shawshank Redemption',
  year: 1994,
  genre: 'Drama',
  rating: 9.3,
  posterUrl: '...',
  synopsis: '...'
}
```

## Understanding JSX

JSX lets you write HTML-like code inside JavaScript. The curly braces `{}` let you insert JavaScript values:

```jsx
// Static text
<h2>Hello World</h2>

// Dynamic data from props
<h2>{movie.title}</h2>

// JavaScript expression
<span>{movie.rating}/10</span>
```

## The Component Pattern

Once your MovieCard is styled, you can use it multiple times:

```jsx
// One component definition...
function MovieCard({ movie }) { ... }

// ...used three times with different data!
<MovieCard movie={shawshank} />
<MovieCard movie={darkKnight} />
<MovieCard movie={inception} />
```

This is why components are powerful — **build once, use everywhere**.

## Tech Stack

- **React** — UI library for building components
- **React Router v7** — Handles pages and routing
- **Tailwind CSS v4** — Utility-first styling
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast development server

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
