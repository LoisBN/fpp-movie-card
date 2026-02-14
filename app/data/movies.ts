export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  posterUrl: string;
  synopsis: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    posterUrl: 'https://via.placeholder.com/200x300?text=Shawshank+Redemption',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    posterUrl: 'https://via.placeholder.com/200x300?text=The+Dark+Knight',
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.'
  },
  {
    id: 3,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    posterUrl: 'https://via.placeholder.com/200x300?text=Inception',
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.'
  }
];