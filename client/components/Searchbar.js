import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context';

export default function Searchbar() {
  const images = useContext(AppContext);
  images.map((image) => {
    const location = image.location;
    return location;
  });
  return (
    <div>
      {/* <input
        placeholder="Enter Post Title"
        onChange={(event) => setQuery(event.target.value)}
      />
      {props.images
        .filter((image) => {
          if (props.query === '') {
            return image;
          } else if (
            image.location.state
              .toLowerCase()
              .includes(props.query.toLowerCase())
          ) {
            return image;
          }
        })
        .map((image) => (
          <div className="box" key={image._id}>
            <p>{image.title}</p>
            <img src={image.url} />
          </div>
        ))} */}
    </div>
  );
}
