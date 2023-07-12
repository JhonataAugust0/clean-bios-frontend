import { Text } from "components/Text";
import { Row } from "components/Row";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #70AE6E;
  padding: 10px;
  width: 100vw;
  height: 58px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  padding-left: 10px;
  font-family: Arial, sans-serif;
  font-size: 18px;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Row width="100%">
        <Toolbar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/privacy">Privacy</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Registre-se</StyledLink>
          <StyledLink to="/clients">Clientes</StyledLink>
          <StyledLink to="/schedules">Agendamentos</StyledLink>
        </Toolbar>
      </Row>
    </HeaderContainer>
  );
};
