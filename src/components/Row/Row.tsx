import { styled } from "styled-components";
import { FlexboxProps, LayoutProps, PaddingProps, flexbox, layout, padding } from "styled-system";

type RowProps = LayoutProps & FlexboxProps & PaddingProps


export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${layout}
  ${flexbox}
  ${padding}
`
