import { Link, useLocation } from 'react-router-dom';
import { Item, Names, List } from './MovieItem.styled';
import PropTypes from 'prop-types';

export const SearchMovie = ({ searchQuery }) => {
  const location = useLocation();
  return (
    <List>
      {searchQuery.map(({ poster_path, original_title, id }) => (
        <Item key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              width={300}
            />
            <Names>{original_title}</Names>
          </Link>
        </Item>
      ))}
    </List>
  );
};

SearchMovie.propTypes = {
  searchQuery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
