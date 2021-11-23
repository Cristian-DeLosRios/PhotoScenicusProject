import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import Loupe from '../../public/loupe.png';

const SearchbarStyles = styled.div`
  display: grid;
  grid-template-columns: [list] 200px 1fr;
`;
const InputWrapper = styled.div`
  position: relative;
  place-self: center;
  display: flex;
  height: 20px;
  width: 25%;
`;

const LoupeIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 9px;
  height: 15px;
  width: 15px;
  background-size: cover !important;
  background: url(${Loupe}) no-repeat center;
`;
const SearchbarInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 100%;
  width: 80%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;
  &:hover {
    border: 1.5px solid #009688;
    background-color: white;
  }
  &:focus {
    border: 1.5px solid #009688;
    background-color: white;
  }
`;

const OutputList = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  place-self: right;
  background-color: #ffffff6b;
`;

const Item = styled.div`
  margin: left;
  color: darkblue;
  p {
    margin-inline-start: 10%;
    font-weight: 700;
    font-size: large;
  }
  img {
    margin-left: 10%;
    width: 80%;
    height: auto;
  }
`;

const ListItem = styled.div``;

export default function Searchbar() {
  const { images, query, setQuery } = useContext(AppContext);
  // const locations = images.map((image) => {
  //   const location = image.location;
  //   return location;
  // });
  return (
    <SearchbarStyles>
      <OutputList>
        {images.map((image) => {
          if (
            image.location.state.toLowerCase().includes(query.toLowerCase()) &&
            query !== ''
          ) {
            return (
              <Item className="box" key={image._id}>
                <p>{image.title}</p>
                <img src={image.url} />
                {/* <img src={image.url} /> */}
              </Item>
            );
          }
          return null;
        })}
      </OutputList>
      <InputWrapper>
        <LoupeIcon />
        <SearchbarInput
          placeholder="Search images by location"
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputWrapper>
    </SearchbarStyles>
  );
}
// search-icon {
//   position: absolute;
//   top: 6px;
//   left: 8px;
//   width: 14px;
// }

// {images
//   .filter((image) => {
//     if (
//       image.location.state.toLowerCase().includes(query.toLowerCase())
//     ) {
//       return true;
//     } else {
//       return 'false';
//     }
//   })
//   .map((image) => (
//     <div className="box" key={image._id}>
//       <p>{image.title}</p>
//       {/* <img src={image.url} /> */}
//     </div>
//   ))}
