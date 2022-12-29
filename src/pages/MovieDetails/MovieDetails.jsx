import { useEffect, useState } from 'react';
import { fetchMovieById } from '../../services/fetchMovie';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import {
  BackLink,
  MovieContainer,
  About,
  Title,
  Subtitle,
  LinkItem,
  List,
  Item,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovieById() {
      const response = await fetchMovieById(movieId);
      setMovie(response);
    }
    getMovieById();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  console.log(movie);

  const { original_title, release_date, overview, poster_path, vote_average } =
    movie;

  return (
    <>
      <BackLink to={backLinkHref}>
        <BsArrowLeftCircleFill style={{ marginRight: '5px' }} />
        Go back
      </BackLink>

      <MovieContainer>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
            width={400}
          />
        </div>
        <About>
          <Title>
            {original_title} ({release_date.slice(0, 4)})
          </Title>
          <br />
          <Subtitle> User Score: </Subtitle>
          <p>{Math.round(vote_average * 10)} % </p>
          <br />
          <Subtitle>Overview:</Subtitle>
          <p> {overview}</p>
          <br />
          <Subtitle> Genres:</Subtitle>
          <p>
            {movie.genres.length > 3
              ? movie.genres
                  .slice(0, 2)
                  .map(genre => genre.name)
                  .concat('Other')
                  .join(' ')
              : movie.genres.map(genre => genre.name).join(' ')}
          </p>
          <br />
          <Subtitle>Additional information:</Subtitle>
          <List>
            <Item>
              <LinkItem to={'cast'} state={{ from: backLinkHref }}>
                Cast
              </LinkItem>
            </Item>
            <Item>
              <LinkItem to={'reviews'} state={{ from: backLinkHref }}>
                Reviews
              </LinkItem>
            </Item>
          </List>
          <Outlet />
        </About>
      </MovieContainer>
    </>
  );
};
