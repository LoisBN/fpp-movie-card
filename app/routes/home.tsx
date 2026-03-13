import { useState } from 'react';
import MovieCard from '~/components/MovieCard';
import { movies } from '~/data/movies';

const steps = [
  {
    id: 1,
    title: "Card Container",
    emoji: "📦",
    goal: "Create a card wrapper with dark background",
    prompt: `Style the MovieCard container div with:
- Dark gray background
- Rounded corners
- Hidden overflow (for image corners)
- Subtle shadow and border`,
    concept: "The Container Pattern",
    explanation: "Every card component starts with a container — a wrapper div that holds everything inside. Think of it like a picture frame that gives shape to your content.",
    whatToNotice: "Look at the outermost <div> in MovieCard.tsx. This is where we add background color, borders, and rounded corners.",
    fileHint: "Find the div with the comment 'Step 1: Card Container'"
  },
  {
    id: 2,
    title: "Movie Poster",
    emoji: "🖼️",
    goal: "Display the poster image properly",
    prompt: `Style the image in MovieCard:
- Container: 2:3 aspect ratio (movie poster size)
- Image: fill container, no distortion`,
    concept: "Aspect Ratios & Object Fit",
    explanation: "Movie posters have a 2:3 ratio (width:height). We set this ratio on the container, then tell the image to 'cover' the space without stretching.",
    whatToNotice: "The image uses {movie.posterUrl} — this is JSX syntax! The curly braces let us use JavaScript values inside our HTML-like code.",
    fileHint: "Find the <img> tag and its parent div"
  },
  {
    id: 3,
    title: "Title",
    emoji: "✏️",
    goal: "Style the movie title",
    prompt: `Style the title section:
- Content area: add padding
- Title: large, bold, white text
- Space below the title`,
    concept: "Typography & Spacing",
    explanation: "Good UI needs visual hierarchy. The title should be the most prominent text — larger and bolder than everything else.",
    whatToNotice: "We use {movie.title} to display data. The 'movie' object comes from props — data passed into the component.",
    fileHint: "Find the <h2> element with {movie.title}"
  },
  {
    id: 4,
    title: "Badges",
    emoji: "🏷️",
    goal: "Create year and genre pills",
    prompt: `Create year and genre badges:
- Row layout with gap
- Year: blue pill shape
- Genre: purple pill shape`,
    concept: "Flexbox Layout",
    explanation: "Flexbox arranges items in a row (or column). We use it to place the year and genre badges side by side with consistent spacing.",
    whatToNotice: "Each badge displays different data: {movie.year} and {movie.genre}. Same styling pattern, different content!",
    fileHint: "Find the two <span> elements for year and genre"
  },
  {
    id: 5,
    title: "Synopsis",
    emoji: "📝",
    goal: "Add the movie description",
    prompt: `Style the synopsis:
- Muted gray color
- Smaller text
- Max 2 lines with ellipsis`,
    concept: "Text Truncation",
    explanation: "Long text can break layouts. We limit the synopsis to 2 lines and add '...' if it's longer. This keeps cards the same height.",
    whatToNotice: "The synopsis uses {movie.synopsis}. Notice how all movie data comes from the same 'movie' prop object.",
    fileHint: "Find the <p> element with {movie.synopsis}"
  },
  {
    id: 6,
    title: "Rating",
    emoji: "⭐",
    goal: "Display the star rating",
    prompt: `Style the rating:
- Add yellow star (★) before number
- Horizontal layout
- Rating in white, "/10" in gray`,
    concept: "Composing Elements",
    explanation: "The rating section combines multiple elements: a star icon, the rating number, and '/10'. Each can be styled independently.",
    whatToNotice: "We're adding a star character (★) as text. In React, you can mix static text with dynamic data like {movie.rating}.",
    fileHint: "Find the rating section at the bottom of the card"
  },
];

export default function Home() {
  const [phase, setPhase] = useState<'intro' | 'work'>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  const step = steps[currentStep];
  const isComplete = currentStep >= steps.length;

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(step.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // INTRO SCREEN
  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-5xl">🎬</span>
          <h1 className="text-2xl font-bold text-white">Your First React Component</h1>
          <p className="text-gray-400">Learn how components work by building a movie card</p>
        </div>

        {/* The Goal - Before/After */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4 text-center">🎯 Your Mission</h2>
          <p className="text-gray-300 text-center mb-6">
            Transform an unstyled component into a beautiful movie card
          </p>

          <div className="flex items-center justify-center gap-8">
            {/* Before */}
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Before</div>
              <div className="w-36 bg-white rounded border-2 border-dashed border-gray-400 p-2">
                <div className="aspect-[3/4] bg-gray-200 mb-2"></div>
                <div className="text-left text-xs text-gray-600 space-y-1">
                  <div>Title</div>
                  <div>Year Genre</div>
                  <div className="text-gray-400">Synopsis...</div>
                  <div>Rating</div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-3xl text-purple-400">→</div>

            {/* After */}
            <div className="text-center">
              <div className="text-xs text-green-400 mb-2">After</div>
              <div className="w-36 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={movies[0].posterUrl} alt="Goal" className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-white truncate">{movies[0].title}</h3>
                  <div className="flex gap-1 my-2">
                    <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">{movies[0].year}</span>
                    <span className="bg-purple-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">{movies[0].genre}</span>
                  </div>
                  <p className="text-gray-400 text-[10px] line-clamp-2 mb-2">{movies[0].synopsis}</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-semibold">{movies[0].rating}</span>
                    <span className="text-gray-500">/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h2 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
            <span>📚</span> What You'll Learn
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <div>
                <div className="text-white font-medium text-sm">React Components</div>
                <div className="text-gray-400 text-xs">Reusable UI building blocks</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <div>
                <div className="text-white font-medium text-sm">JSX Syntax</div>
                <div className="text-gray-400 text-xs">HTML inside JavaScript</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <div>
                <div className="text-white font-medium text-sm">Props</div>
                <div className="text-gray-400 text-xs">Passing data to components</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <div>
                <div className="text-white font-medium text-sm">Tailwind CSS</div>
                <div className="text-gray-400 text-xs">Styling with utility classes</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Big Idea */}
        <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
          <h2 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
            <span>💡</span> The Big Idea
          </h2>
          <p className="text-gray-300 mb-4">
            A component is like a <span className="text-purple-400 font-medium">template</span>.
            You design it once, then use it for different data:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-500 mb-2">{"// Same component, 3 different movies:"}</div>
            <div className="text-blue-400">{"<MovieCard movie={shawshank} />"}</div>
            <div className="text-blue-400">{"<MovieCard movie={darkKnight} />"}</div>
            <div className="text-blue-400">{"<MovieCard movie={inception} />"}</div>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            By the end, you'll see your single component display all 3 movies!
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>🤖</span> How This Works
          </h2>
          <p className="text-gray-300 mb-4">
            You'll use <span className="text-purple-400 font-medium">AI to write the code</span> — just like professional developers do today.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <div className="text-white font-medium">Read the concept</div>
                <div className="text-gray-400 text-sm">Understand what you're building</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <div className="text-white font-medium">Copy the prompt</div>
                <div className="text-gray-400 text-sm">A clear instruction for Claude</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <div className="text-white font-medium">Paste to Claude & apply</div>
                <div className="text-gray-400 text-sm">AI writes the code for you</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <div className="text-white font-medium">See the result instantly</div>
                <div className="text-gray-400 text-sm">Compare your card to the goal</div>
              </div>
            </div>
          </div>
        </div>

        {/* File to Edit */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
          <div className="text-gray-400 text-sm mb-1">You'll be editing this file:</div>
          <code className="text-purple-400 font-mono">app/components/MovieCard.tsx</code>
        </div>

        <button
          onClick={() => setPhase('work')}
          className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-colors"
        >
          Let's Start! 🚀
        </button>
      </div>
    );
  }

  // COMPLETION SCREEN - Theater View
  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Theater Header */}
        <div className="text-center space-y-2">
          <div className="text-5xl">🎬</div>
          <h1 className="text-3xl font-bold text-white">Now Playing</h1>
          <p className="text-gray-400">Your Movie Card Component in Action</p>
        </div>

        {/* Movie Grid - Theater Style */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <div className="grid grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        {/* The Big Lesson */}
        <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎉</div>
            <div>
              <h2 className="text-xl font-bold text-green-400 mb-2">Congratulations!</h2>
              <p className="text-gray-200 mb-4">
                You just built your first React component!
              </p>
            </div>
          </div>
        </div>

        {/* Understanding Components */}
        <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
          <h2 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
            <span>💡</span> The Power of Components
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              See how <span className="text-purple-400 font-mono">{"<MovieCard />"}</span> appears 3 times above?
              That's the magic of components!
            </p>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-500">{"// One component, three movies:"}</div>
              <div className="text-blue-400">{"<MovieCard movie={shawshank} />"}</div>
              <div className="text-blue-400">{"<MovieCard movie={darkKnight} />"}</div>
              <div className="text-blue-400">{"<MovieCard movie={inception} />"}</div>
            </div>
            <p className="text-gray-400 text-sm">
              You wrote the code once, and React renders it for each movie.
              This is why components are so powerful — <span className="text-white font-medium">build once, use everywhere</span>.
            </p>
          </div>
        </div>

        {/* What You Learned */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">📚 What You Learned</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> JSX syntax (HTML in JavaScript)
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Component structure
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Using props for data
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Tailwind CSS styling
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Reusable UI patterns
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> AI-assisted coding
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => { setCurrentStep(0); setPhase('intro'); }}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            ← Start Over
          </button>
        </div>
      </div>
    );
  }

  // WORK MODE
  return (
    <div className="space-y-4">
      {/* Header with progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{step.emoji}</span>
          <div>
            <div className="text-xs text-gray-500">Step {step.id} of {steps.length}</div>
            <h1 className="text-lg font-bold text-white">{step.title}</h1>
          </div>
        </div>
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm flex items-center gap-1"
        >
          📖 {showInstructions ? 'Hide' : 'Help'}
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentStep(i)}
            className={`flex-1 h-1.5 rounded-full ${
              i < currentStep ? 'bg-green-500' : i === currentStep ? 'bg-purple-500' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Collapsible Instructions */}
      {showInstructions && (
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 space-y-4">
          <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
            <div className="text-purple-400 text-sm font-bold mb-2">📚 {step.concept}</div>
            <p className="text-gray-200 text-sm leading-relaxed">{step.explanation}</p>
          </div>

          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-blue-400 text-sm font-bold mb-2">👀 What to Notice</div>
            <p className="text-gray-300 text-sm leading-relaxed">{step.whatToNotice}</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600">
            <div className="text-gray-400 text-xs font-medium mb-1">📂 Where to look:</div>
            <p className="text-gray-300 text-sm font-mono">{step.fileHint}</p>
          </div>
        </div>
      )}

      {/* Main content: Cards side by side */}
      <div className="flex justify-center gap-6">
        {/* Goal Card */}
        <div className="w-72">
          <div className="text-sm text-green-400 mb-2 text-center font-medium">🎯 Goal</div>
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={movies[0].posterUrl} alt="Goal" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{movies[0].title}</h3>
              <div className="flex gap-2 mb-3">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{movies[0].year}</span>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">{movies[0].genre}</span>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">{movies[0].synopsis}</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-white font-semibold">{movies[0].rating}</span>
                <span className="text-gray-500">/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Your Card */}
        <div className="w-72">
          <div className="text-xs text-purple-400 mb-1.5 text-center font-medium">📝 Yours</div>
          <MovieCard movie={movies[0]} />
        </div>
      </div>

      {/* Prompt to copy */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">🤖 Copy this prompt to Claude:</span>
          <button
            onClick={copyPrompt}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              copied ? 'bg-green-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="bg-gray-900 p-3 rounded text-sm text-gray-300 whitespace-pre-wrap">{step.prompt}</pre>
      </div>

      {/* File reminder */}
      <p className="text-center text-xs text-gray-500">
        📂 File: <code className="text-purple-400">app/components/MovieCard.tsx</code>
      </p>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium ${
            currentStep === 0 ? 'bg-gray-700 text-gray-500' : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          ← Back
        </button>
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium"
        >
          {currentStep === steps.length - 1 ? 'Finish 🎉' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
