import { Movie } from '~/data/movies';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    // Step 1: Card Container
    // Add: dark background, rounded corners, overflow-hidden, shadow, border
    <div className="">

      {/* Step 2: Image Container */}
      {/* Add: aspect ratio for movie poster (2:3), overflow-hidden */}
      <div className="">
        {/* Step 2: Image */}
        {/* Add: full width/height, object-cover to prevent distortion */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className=""
        />
      </div>

      {/* Step 3: Content Container */}
      {/* Add: padding on all sides */}
      <div className="">

        {/* Step 3: Title */}
        {/* Add: text size, font weight, color, bottom margin */}
        <h2 className="">
          {movie.title}
        </h2>

        {/* Step 4: Badges Container */}
        {/* Add: flex display, gap between badges, bottom margin */}
        <div className="">
          {/* Step 4: Year Badge */}
          {/* Add: background color, text color, small text, padding, pill shape */}
          <span className="">{movie.year}</span>

          {/* Step 4: Genre Badge */}
          {/* Add: different background color, text color, small text, padding, pill shape */}
          <span className="">{movie.genre}</span>
        </div>

        {/* Step 5: Synopsis */}
        {/* Add: muted text color, small text, bottom margin, line-clamp for truncation */}
        <p className="">
          {movie.synopsis}
        </p>

        {/* Step 6: Rating Container */}
        {/* Add: flex display, align items center, gap */}
        {/* Structure: star icon + rating number + "/10" */}
        <div className="">
          {/* Add a star span here with yellow color */}
          <span className="">
            {movie.rating}
          </span>
          <span className="">/10</span>
        </div>
      </div>
    </div>
  );
}
