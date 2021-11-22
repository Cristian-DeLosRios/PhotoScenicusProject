/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ImageGallery from './components/ImageGallery';
import AppContext from './context';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
  }
`;

const AppStyles = styled.div`
  display: grid;
  grid-template-rows: [navbar] 70px [contents] 1fr [footer] 40px;
  width: 100vw;
  height: 100vh;
  /* background-color: lightblue; */
`;
const ContentStyles = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightgreen;
  display: grid;
  grid-row-start: contents;
  grid-row-end: 2;
  grid-template-rows: [carousel] 1fr [imageGallery] 1fr;
`;

export default function App() {
  const [images, setImages] = useState([]);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then((images) => {
        console.log(images);
        if (!Array.isArray(images)) {
          images = [];
        }
        return setImages(images);
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  }, [setImages]);

  return (
    <AppContext.Provider value={images}>
      <AppStyles>
        <Navbar />
        <ContentStyles>
          <Carousel />
          <ImageGallery />
        </ContentStyles>
        <GlobalStyle />
      </AppStyles>
    </AppContext.Provider>
  );
}
