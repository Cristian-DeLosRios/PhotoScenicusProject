import React from 'react';
import styled, { css } from 'styled-components';

// "url": "Susan_Von5",
//     "title": "Desert Canyon",
//     "location": { "city": "East Jairo", "state": "Oklahoma" },
//     "rating": 5,
//     "creatorId": "sdafsafsdafdasfsaf"
const Createrid = styled.h3`
  z-index: 10;
  font-size: 1.5em;
  text-align: start;
  color: black;
`;
const Rating = styled.h2`

  z-index: 10;
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const Title = styled.h1`
 
  z-index: 10;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const CardStyles = styled.div`
  max-height:100%;
  border: 1px solid gray;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-y: wrap;
  background: linear-gradient(to bottom, #0064eee3, #6200ee00);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.44);
  border-radius: 18px;
   
  
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.44),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  z-index: 1;
  
  width: 80%;
  height: 80%;
  padding: 1.5%;
  object-fit: cover;
  box-shadow: 1px 3px 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 7px;
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
