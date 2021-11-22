import React from 'react';
import styled from 'styled-components';

const NavBarStyles = styled.div`
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