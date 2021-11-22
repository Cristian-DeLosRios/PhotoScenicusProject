import React from 'react';
import styled from 'styled-components';

const NavBarStyles = styled.div`
  display: grid;
  grid-template-columns: 
  [logo] 50px [name] 100px [space] auto [toprated] 100px [about] 50px [signin] 50px;
  height: 25px;
  background-color: purple;
`;

export default function Navbar () {
  return (<NavBarStyles>
      <button>Log In / Sign Up</button>
      <button>My Favorite Scenes</button>
      <button>Top Rated</button>
          </NavBarStyles>);
}