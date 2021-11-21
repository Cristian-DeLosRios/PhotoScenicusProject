import React, { useEffect, useContext } from 'react';
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
  const { images, setImages } = useContext(AppContext);

  useEffect(() => {
    fetch('/data')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({ images }) => {
        return setImages(images);
        //console.log(data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log('Error Reading data ' + err);
      });
  }, [images]);

  // useEffect(() => {
  //   fetch(data)
  //     .then((data) => data.json())
  //     .then(({ images }) => {
  //       return setImages(images);
  //     });
  // }, [images]);

  return (
    <AppStyles>
      <Navbar />
      <Carousel />
      <ImageGallery images={images} />
    </AppStyles>
  );
}
