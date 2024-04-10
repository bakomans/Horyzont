import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

function Footer() {
  return (
    <StyledFooter>
      @Created by Tomasz Bachuła
    </StyledFooter>
  );
}

export default Footer;
