import React from 'react';
import styled, { css } from 'styled-components';




// "url": "Susan_Von5",
//     "title": "Desert Canyon",
//     "location": { "city": "East Jairo", "state": "Oklahoma" },
//     "rating": 5,
//     "creatorId": "sdafsafsdafdasfsaf"

const CardStyles = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  width: 20vw;
  height: 20vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: lightblue;
  margin: 1vw;
`;

const Image = styled.img`
  
  width: 100%;
  height: 100%;
  background-color: purple;
  border-radius: 18px;
`;

export default function ImageCard(props) {
  //   const creatorName = users.find((user) => {
  //     user._id === props.creatorId;
  //     return user.name;
  //   });

  return (
   
    <CardStyles>
      <h1>{props.title}</h1>
      {/* <img src={require('../../public/Pic1.jpg')} /> */}

      {/* <img src={require('./public/Pic1.jpg')} /> */}
      <Image src={props.url} />

      <h2>rating {props.rating}</h2>
      {/* <h2>Photo taken by: {creatorName}</h2> */}
    </CardStyles>
    
  );
}

/* ${({ url }) => css`
    background-size: cover !important;
    background: url(${url}) no-repeat center;
  `} */