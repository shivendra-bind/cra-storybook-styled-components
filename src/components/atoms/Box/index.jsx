import styled from 'styled-components';
import {
  alignSelf,
  borders,
  bottom,
  flex,
  fontSize,
  gridArea,
  height,
  left,
  order,
  right,
  top,
  width,
  zIndex,
} from 'styled-system';

import Element from '../Element';

const Box = styled(Element)(
  {},
  alignSelf,
  bottom,
  flex,
  gridArea,
  height,
  left,
  order,
  right,
  top,
  zIndex,
  width,
  fontSize,
  borders,
);

Box.displayName = 'Box';
Box.defaultProps = {
  className: 'atom-box',
  boxSizing: 'border-box',
};

export default Box;
