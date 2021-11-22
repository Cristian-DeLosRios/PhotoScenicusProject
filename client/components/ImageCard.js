import React from 'react';
import styled, { css } from 'styled-components';

// "url": "Susan_Von5",
//     "title": "Desert Canyon",
//     "location": { "city": "East Jairo", "state": "Oklahoma" },
//     "rating": 5,
//     "creatorId": "sdafsafsdafdasfsaf"
const createrid = styled.h3`
  z-index: 10;
  font-size: 1.5em;
  text-align: center;
  color: palegoldenrod;
`;
const Rating = styled.h2`
  z-index: 10;
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Title = styled.h1`
  z-index: 10;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const CardStyles = styled.div`
  border: 1px solid gray;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  min-width: 250px;
  background: linear-gradient(to bottom, #0064eee3, #6200ee00);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.44);
  border-radius: 18px;
  margin: 5px 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.44),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  z-index: 1;
  margin-top: -2.5%;
  width: 200px;
  height: 200px;
  padding: 1.5%;
  object-fit: background;
  /* background-color: white; */
  /* border: 1px solid gray; */
  box-shadow: 1px 3px 4px 0 rgba(0, 0, 0, 0.3);
  /* background-color: skyblue; */
  border-radius: 10px;
`;

export default function ImageCard(props) {
  //   const creatorName = users.find((user) => {
  //     user._id === props.creatorId;
  //     return user.name;
  //   });

  return (
    <CardStyles>
      <Title>{props.title}</Title>
      <Image src={props.url} />
      <Rating>rating {props.rating}</Rating>
    </CardStyles>
  );
}

/* ${({ url }) => css`
    background-size: cover !important;
    background: url(${url}) no-repeat center;
  `} */
