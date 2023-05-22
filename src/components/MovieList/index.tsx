import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard";

import { Movie } from "../../types";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 8px;
`;

interface MovieListProps {
  movies: Movie[];
  isShowDetail?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  isShowDetail = true,
}) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          image={movie.image}
          title={movie.title}
          fullTitle={movie.fullTitle}
          description={""}
          crew={movie.crew}
          isShowDetail={isShowDetail}
        />
      ))}
    </List>
  );
};

export default MovieList;
