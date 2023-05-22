import { FC, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieList from "../components/MovieList";
import { tvCatalog } from "../mocks/tvCatalog";

import { IMDB_API_KEY, IS_DEV_MODE } from "../configs";

interface Movie {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

const Page = styled.div`
  padding: 16px;
`;

const TvCatalogPage: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (IS_DEV_MODE) {
          setMovies((prevMovies) => [...prevMovies, ...tvCatalog.items]); // in case API limit using mocks instead
        } else {
          const response = await axios.get(
            // NOTE: API not supported pageSize
            // `https://imdb-api.com/en/API/Top250TVs/${
            //   IMDB_API_KEY
            // }/pageSize=28&page=${page}`
            `https://imdb-api.com/en/API/Top250TVs/${IMDB_API_KEY}`
          );
          setMovies((prevMovies) => [...prevMovies, ...response.data.items]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Page>
      {/* NOTE: isShowDetail to Exclude TV show detail page  */}
      <MovieList movies={movies} isShowDetail={false} />
    </Page>
  );
};

export default TvCatalogPage;
