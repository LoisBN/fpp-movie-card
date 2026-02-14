import MovieCard from '~/components/MovieCard';
import { movies } from '~/data/movies';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Your Challenge</h2>
        <p className="text-gray-300 mb-4">
          Below is a React component that needs styling. Complete the MovieCard component by:
        </p>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          <li>Add Tailwind classes to the card container (background, padding, rounded corners, shadow)</li>
          <li>Style the image to be responsive and fill its container</li>
          <li>Add proper spacing and typography for the title</li>
          <li>Create badge-style elements for year and genre</li>
          <li>Style the synopsis text with appropriate sizing and color</li>
          <li>Format and style the rating display</li>
        </ul>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">Original HTML (For Reference)</h2>
        <pre className="bg-gray-900 p-4 rounded overflow-x-auto text-gray-300 text-sm">
{`<div class="movie-card">
  <div class="movie-image">
    <img src="..." alt="Movie title" />
  </div>
  <div class="movie-content">
    <h2>Movie Title</h2>
    <div class="movie-meta">
      <span class="year-badge">2024</span>
      <span class="genre-badge">Drama</span>
    </div>
    <p class="synopsis">Synopsis text here...</p>
    <div class="rating">Rating: 8.5/10</div>
  </div>
</div>`}
        </pre>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Movie Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}