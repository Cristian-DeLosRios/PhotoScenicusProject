import React, { useContext } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import AppContext from '../context';

const GalleryStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

export default function ImageGallery() {
  const images = useContext(AppContext);
  // const images = [{}, {}, {}, {}]
  console.log(images);
  return (
    <GalleryStyles>
      {images.map((image) => {
        return <ImageCard {...image} key={image._id} />;
      })}
    </GalleryStyles>
  );
}
