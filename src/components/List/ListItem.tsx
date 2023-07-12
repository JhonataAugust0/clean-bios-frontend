import { Button, Column, Row, Text } from "components";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export type ListItemProps = {
  label: string;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: #000000;
  padding-left: 10px;
  font-family: Arial, sans-serif;
  font-size: 18px;
`;

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  const lines = label.split("\n"); // Divide a string em várias linhas usando "\n" como separador

  return (
    <Column width="100%" padding="20px" mb="10px" borderRadius="90px" borderLeft="5px solid #fff">
      {lines.map((line, index) => (
        <Row key={index}>
          <Text>{line}</Text>
        </Row>
      ))}
      <Row padding="10px 0px 0px 0">
        <Button width="120px" >
          <StyledLink to="/schedulling">Agendar</StyledLink>
        </Button>
      </Row>
    </Column>
  );
};
