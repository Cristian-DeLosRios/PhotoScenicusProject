import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;


export default function ImageCard (props) {
  return (<CardStyles>
<h1>{props.title}</h1>
<img src={props.url}/>
<h2></h2>
  </CardStyles>);
}