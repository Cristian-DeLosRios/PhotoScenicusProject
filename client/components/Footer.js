import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to right,
    #00b8d4,
    #0052cc,
    #6200ee,
    #3700b3
  );
`;

export default function Footer() {
  return <FooterStyles></FooterStyles>;
}
