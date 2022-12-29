import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/fetchMovie';
import PropTypes from 'prop-types';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const response = await fetchCredits(movieId);
      setCast(response);
    }
    getCast();
  }, [movieId]);

  const defaultImg =
    'https://suzmakelaars.nl/wp-content/uploads/2019/11/user-placeholder-4-e1574089236199.png';

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cast.map(({ cast_id, original_name, profile_path, character }) => (
        <li key={cast_id} style={{ width: '25%' }}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultImg
            }
            alt=""
            width={120}
            height={150}
          />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
