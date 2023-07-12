import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  text-align: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Link = styled.a`
  color: #000;
  text-decoration: none;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div >
        &copy; {new Date().getFullYear()}{' '}
        <Link > - CleanBios</Link>
      </div>
    </FooterContainer>
  );
};

