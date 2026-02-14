import { Movie } from '~/data/movies';

interface MovieCardProps {
  movie: Movie;
}

// TODO: Add Tailwind classes to make this card look great
// TODO: Convert inline styles to className attributes
// TODO: Make sure the card is responsive and visually appealing

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="/* TODO: Add card container classes here */">
      {/* TODO: Add image container with classes */}
      <div>
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="/* TODO: Make the image responsive */"
        />
      </div>

      {/* TODO: Add content container with padding and classes */}
      <div>
        <h2 className="/* TODO: Add title styling */">
          {movie.title}
        </h2>

        <div className="/* TODO: Add metadata row styling */">
          <span className="/* TODO: Style year badge */">{movie.year}</span>
          <span className="/* TODO: Style genre badge */">{movie.genre}</span>
        </div>

        <p className="/* TODO: Add synopsis styling */">
          {movie.synopsis}
        </p>

        <div className="/* TODO: Add rating container styling */">
          <span className="/* TODO: Style rating text */">
            Rating: {movie.rating}/10
          </span>
        </div>
      </div>
    </div>
  );
}