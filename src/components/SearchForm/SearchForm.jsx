import { useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { SearchMovie } from '../../components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../services/fetchMovie';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input, Btn } from './SearchForm.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = () => {
  const [movies, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    async function getMovie() {
      setLoading(true);
      const response = await fetchMovies(query);
      setSearchQuery(response);
      if (!response.length) {
        return toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }

      setLoading(false);
    }
    getMovie();
  }, [query]);
  const handleSubmit = e => {
    e.preventDefault();

    if (!e.currentTarget.elements.query.value) {
      setSearchQuery([]);
      setSearchParams({});
      return toast.error('Please enter some keywords to search.');
    }
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="query"
        />
        <Btn type="submit">
          <AiOutlineSearch />
        </Btn>
      </Form>
      {loading && <Loader />}
      <SearchMovie searchQuery={movies} />
    </>
  );
};

export default SearchForm;
