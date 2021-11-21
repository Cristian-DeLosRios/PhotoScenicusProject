import React from 'react';
import styled from 'styled-components';

const GalleryStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

export default function ImageGallery(props) {
  return (
    <GalleryStyles>
      {props.images.map((image) => {
        return <ImageCard {...image} key={image._id}/>;
      })}
    </GalleryStyles>
  );
}
