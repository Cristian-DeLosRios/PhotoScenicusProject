import React from 'react';
import styled, { css } from 'styled-components';
import sampleImage from '../../public/Pic1.jpg';

const CardStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;
const Image = styled.div`
  background-color: purple;
  /* ${({ photoUrl }) => css`
    background-size: cover !important;
    background: url(${photoUrl}) no-repeat center;
  `} */
`;

export default function ImageCard(props) {
  const creatorName = users.find((user) => {
    user._id === props.creatorId;
    return user.name;
  });

  return (
    <CardStyles>
      <h1>{props.title}</h1>
      {/* <img src={require('../../public/Pic1.jpg')} /> */}
      {/* <img src={sampleImage} /> */}
      <Image />
      {/* photoUrl={props.url} */}
      <h2>rating {props.rating}</h2>
      {/* <h2>Photo taken by: {creatorName}</h2> */}
    </CardStyles>
  );
}

// "url": "Susan_Von5",
//     "title": "Desert Canyon",
//     "location": { "city": "East Jairo", "state": "Oklahoma" },
//     "rating": 5,
//     "creatorId": "sdafsafsdafdasfsaf"
