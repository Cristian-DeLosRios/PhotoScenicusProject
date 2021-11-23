import React, { useContext } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import AppContext from '../context';

const GalleryStyles = styled.div`
  display: flex;
  align-items: center;
  grid-row-start: imageGallery;
  grid-row-end: 2;
  gap: 2.5%;
  /* padding: 1%; */
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
`;
export default function ImageGallery() {
  const { images } = useContext(AppContext);
  // const images = [{}, {}, {}, {}]
  // console.log(images);
  return (
    <Container>
    <GalleryStyles>
      {/* <Container> */}
      {images.map((image) => {
        return <ImageCard {...image} key={image._id} />;
      })}
      {/* </Container> */}
    </GalleryStyles>
    </Container> 
  );
}