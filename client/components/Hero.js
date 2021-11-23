import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import heroImage from '../../public/heroImage.jpg';
import Searchbar from './Searchbar';

//const CarouselInner = styled.div``;
const HeroStyles = styled.div`
  background-size: cover !important;
  background: url(${heroImage}) no-repeat center;
  height: 100%;
  width: 100%;
  display: grid;
`;

export default function Hero() {
  return (
    <HeroStyles>
      <Searchbar />
    </HeroStyles>
  );
}
