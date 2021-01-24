import styled from 'styled-components';

import {
  alignContent,
  alignItems,
  alignSelf,
  backgroundImage,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gridArea,
  justifyContent,
  justifyItems,
  justifySelf,
  layout,
  margin,
  order,
  overflow,
  position,
  space,
} from 'styled-system';
import Element from '../Element';

const Flex = styled(Element)(
  { display: 'flex' },
  alignContent,
  alignItems,
  alignSelf,
  backgroundImage,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  layout,
  margin, space,
  order,
  overflow,
  position,
  gridArea,
);

Flex.displayName = 'Box';
Flex.defaultProps = {
  className: 'atom-flex',
};

export default Flex;
