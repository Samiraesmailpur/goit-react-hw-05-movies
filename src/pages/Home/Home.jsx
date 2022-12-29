import { useEffect, useState } from 'react';
import { fetchTrendingMovie } from '../../services/fetchMovie';
import { TrendingList } from '../../components/TrendingList/TrendingList';
import { List, Title } from './Home.styled';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getPopularMovie() {
      const trending = await fetchTrendingMovie();
      setTrending(trending);
    }
    getPopularMovie();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <List>
        <TrendingList trending={trending} />
      </List>
    </div>
  );
};
