import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ImageGallery from './components/ImageGallery';
import AppContext from './context';

const AppStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((images) => {
        if (!Array.isArray(images)) images = [];
        return setImages(images);
      })
      .catch((err) => {
        // Do something for an error here
        console.log('Error Reading data ' + err);
      });
  }, [setImages]);

  return (
    <AppContext.Provider value={images}>
      <AppStyles>
        <Navbar />
        {/* <img src={Pic1} alt="" /> */}
        <Carousel />
        <ImageGallery />
      </AppStyles>
    </AppContext.Provider>
  );
}
