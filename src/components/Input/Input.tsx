import { styled } from "styled-components";
import { FlexProps, flex, height, width } from "styled-system";

type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
  background-color: transparent;
  padding: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: #7A7A7A;
  $::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  ${height}
  ${width}
  ${flex}
`;
