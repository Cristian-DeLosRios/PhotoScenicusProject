import React from 'react';
import styled, { css } from 'styled-components';
import sampleImage from '../../public/Pic1.jpg';

const CardStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;
const Image = styled.div`
  ${({ photoUrl }) => css`
    background-size: cover !important;
    background: url(${photoUrl}) no-repeat center;
  `}
`;

export default function ImageCard(props) {
  console.log(typeof props.url);
  return (
    <CardStyles>
      <h1>{props.title}</h1>
      {/* <img src={require('../../public/Pic1.jpg')} /> */}
      <img src={sampleImage} />
      {/* <Image photoUrl={props.url} /> */}
      <h2></h2>
    </CardStyles>
  );
}
