import React, { CSSProperties, FC } from 'react';
import PropTypes, { Validator } from 'prop-types';
import styled from 'styled-components';

interface HeaderProps {
  Tag: keyof JSX.IntrinsicElements;
  className?: string;
  text: string;
  style?: CSSProperties;
}

interface StyledHeaderProps {
  customStyle?: CSSProperties;
}

const StyledHeader = styled.div<StyledHeaderProps>`
  font-size: ${(props) => props.customStyle?.fontSize || '16px'};
  font-weight: ${(props) => props.customStyle?.fontWeight || 'normal'};
  color: 'black',
`;

export const Title: FC<HeaderProps> = ({ Tag, className, text, style }) => {
  const DynamicTag: keyof JSX.IntrinsicElements = Tag;

  return (
    <StyledHeader as={DynamicTag} className={className} customStyle={style}>
      {text}
    </StyledHeader>
  );
};

Title.propTypes = {
  Tag: PropTypes.string.isRequired as Validator<keyof JSX.IntrinsicElements>,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};
