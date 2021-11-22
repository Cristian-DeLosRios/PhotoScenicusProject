/* eslint-disable */
import React, { useEffect, useState, createContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import AppContext from './context';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: 'Raleway', 'sans-serif';
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
  // const AppContext = createContext([]);
  const [images, setImages] = useState([]);
  //const [query, setQuery] = useState('');

  // const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/images')
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
        <GlobalStyle />
        <Navbar />
        {/* <SignIn/> */}
        <ContentStyles>
          <Hero />
          <ImageGallery />
        </ContentStyles>
        <Footer />
      </AppStyles>
    </AppContext.Provider>
  );
}
