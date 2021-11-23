// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import ImageCard from './ImageCard';
// import AppContext from '../context';

// const GalleryStyles = styled.div`
//   display: flexbox;
//   grid-row-start: imageGallery;
//   grid-row-end: 2;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   align-items: center;
//   flex: 1 0 calc(24% - 2%);
//   gap: 1%;
//   padding: 1%;
//   width: 100%;
//   height: 100%;
//   flex-wrap: nowrap;
//   overflow: hidden;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   background-color: #50572b63;
// `;
// /*
//  */

import React, { useContext } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import AppContext from '../context';

// const Container = styled.div`
//   display: flex;
//   max-width: fit-content;
//   max-height: fit-content;
//   flex: 0 0 calc(24% - 2%);
//   justify-content: space-around;
// `;

// const CardWrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   display: grid;
//   grid-template-rows: 20px [imageCards] 1fr;
// `;

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
    <GalleryStyles>
      {/* <Container> */}
      {images.map((image) => {
        return <ImageCard {...image} key={image._id} />;
      })}
      {/* </Container> */}
    </GalleryStyles>
  );
}

/*
 */
