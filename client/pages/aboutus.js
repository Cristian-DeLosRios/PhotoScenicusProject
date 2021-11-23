import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutUsStyles = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightgreen;
  grid-row-start: contents;
  grid-row-end: 2;
`;

export default function AboutUs() {
  return (
    <AboutUsStyles>
      <h1> What is PhotoScenicus?</h1>
      <p>
        PhotoScenicus is an application where multiple users can rank various
        scenic locations and comment their opinions on locations across the
        world.
      </p>
      <p>
        PhotoScenicus is developed by Eleni Zoumpoulaki, Cristian De Los Rios,
        Justin Blalock, and Robert Koulakes.
      </p>
    </AboutUsStyles>
  );
}
