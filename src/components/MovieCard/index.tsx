import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  width: 160px;
  height: 300px;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  &:hover {
    transition: linear 0.2s;
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

const Title = styled.h3`
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  margin-top: 2px;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
`;

const DescriptionBlock = styled.p`
  display: block;
  display: -webkit-box;
  padding: 0 10px;
  color: #b2b2b2;
  max-width: 100%;
  margin: 8px auto;
  font-size: 10px;
  line-height: 14px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// const Description = styled.p`
//   font-size: 10px;
//   padding: 0 10px;
//   color: #b2b2b2;
//   margin-bottom: 8px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

interface MovieCardProps {
  title: string;
  fullTitle: string;
  movieId: string;
  image: string;
  description: string;
  crew: string;
  isShowDetail: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  fullTitle,
  movieId,
  image,
  crew,
  isShowDetail = true,
  // description, this is not supported from API
}) => {
  return (
    // <Link to={`/movie/${movieId}`}></Link>
    <Card
      onClick={() => {
        if (isShowDetail) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          window.location = `/movie/${movieId}` as any;
        }
      }}
    >
      <Image src={image} alt={title} />
      <Title>{fullTitle}</Title>
      <DescriptionBlock>{crew}</DescriptionBlock>
      {/* <Description>{description}</Description> */}
    </Card>
  );
};

export default MovieCard;
