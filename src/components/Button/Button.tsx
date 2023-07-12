import { styled } from "styled-components";
import { LayoutProps } from "styled-system";

type ButtonProps = LayoutProps;

export const Button = styled.button<ButtonProps>`
  width: ${props => props.width || "100%"};
  border-radius: 4px;
  padding: 10px 20px;
  padding-top: 8px;
  background-color: #599557;
  cursor: pointer;
  color: #000;
  border-bottom 2px solid rgba(255, 255, 255, 0.2);
`
