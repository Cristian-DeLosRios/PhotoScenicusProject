import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../public/photo.png';

const NavBarStyles = styled.div`
  display: grid;
  grid-template-columns: [logo] 75px [name] 200px [space] auto [toprated] 100px [about] 100px [signin] 100px;
  height: 70px;
  background-image: linear-gradient(
    to right,
    #00b8d4,
    #0052cc,
    #6200ee,
    #3700b3
  );
`;

const Logo = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover !important;
  background: url(${logo}) no-repeat center;
`;

const Name = styled.h1`
  color: white;
`;

const Space = styled.div``;

const TopRated = styled(Link)`
  color: white;
  place-self: center;
  text-decoration: none;
`;

const About = styled(Link)`
  color: white;
  place-self: center;
  text-decoration: none;
`;

const LogInButton = styled(Link)`
  color: white;
  place-self: center;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <NavBarStyles>
      <Logo />
      <Name>PhotoScenicus</Name>
      <Space />
      <TopRated to="/">Top Rated</TopRated>
      <About to="/">About Us...</About>
      <LogInButton to="/">Log In</LogInButton>
    </NavBarStyles>
  );
}
