import { Link, useLocation } from 'react-router-dom';
import { Item, Names } from './TrendingList.styled';
import PropTypes from 'prop-types';

export const TrendingList = ({ trending }) => {
  const location = useLocation();
  return (
    <>
      {trending.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              width={300}
            />
            <Names>{title}</Names>
          </Link>
        </Item>
      ))}
    </>
  );
};

TrendingList.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
