import { styled } from "styled-components";
import { BorderProps, BorderRadiusProps, ColorProps, FlexboxProps, LayoutProps, SpaceProps, border, borderRadius, color, flexbox, layout, padding, space } from "styled-system";

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderProps & FlexboxProps;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || "100%"};
  ${layout}
  ${space}
  ${color}
  ${borderRadius}
  ${border}
  ${padding}
  ${flexbox}
`;
