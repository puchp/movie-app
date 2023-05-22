import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { movieDetail } from "../mocks/movieDetail";
import { IMDB_API_KEY, IS_DEV_MODE } from "../configs";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerMovieImage = styled.div`
  display: flex;
  min-width: 240px;
`;

const ContainerMovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0px 20px;
`;

const Page = styled.div`
  padding: 0px 16px;
`;

const Breadcrumb = styled(Link)`
  font-size: 14px;
  color: #555;
  padding: 2px;
  text-decoration: none;
  &:hover {
    transition: linear 0.2s;
    transform: scale(1.05);
  }
`;

const BreadcrumbText = styled.p`
  font-size: 14px;
  color: #555;
  padding: 0px 2px;
`;

const MovieImage = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const Text = styled.p`
  font-size: 10px;
  color: #555;
  margin-bottom: 4px;
`;

const SmallText = styled.p`
  font-size: 10px;
  color: #555;
  margin-bottom: 4px;
  padding: 4px;
`;

interface MovieDetail {
  image: string;
  title: string;
  fullTitle: string;
  year: number;
  genres: string;
  runtimeStr: string;
  plot: string;
}

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        if (IS_DEV_MODE) {
          setMovie(movieDetail);
        } else {
          const response = await axios.get(
            `https://imdb-api.com/en/API/Title/${IMDB_API_KEY}/${id}`
          );
          setMovie(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return null; // show a loading spinner here
  }

  return (
    <Page>
      <Container>
        <Breadcrumb to="/movies">Movies </Breadcrumb>
        <BreadcrumbText>/</BreadcrumbText>
        <BreadcrumbText>{movie.title}</BreadcrumbText>
      </Container>
      <Container>
        <ContainerMovieImage>
          <MovieImage src={movie.image} alt={movie.title} />
        </ContainerMovieImage>

        <ContainerMovieDetail>
          <Title>{movie.fullTitle}</Title>
          <Container>
            <SmallText>{movie?.genres}</SmallText>
            <SmallText>Year: {movie.year}</SmallText>
            <SmallText>Duration: {movie.runtimeStr}</SmallText>
          </Container>

          <Text>{movie.plot}</Text>
        </ContainerMovieDetail>
      </Container>
    </Page>
  );
};

export default MovieDetailPage;
