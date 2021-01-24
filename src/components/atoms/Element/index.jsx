import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  gridColumn,
  gridRow,
  layout,
  margin,
  position,
  space,
  typography,
} from 'styled-system';

const Element = styled('div')`
  ${border}
  ${color}
  ${flexbox}
  ${gridRow}
  ${gridColumn}
  ${layout}
  ${margin}
  ${position}
  ${space}
  ${typography}
`;

Element.propTypes = {
  ...color.prototype,
  ...border.prototype,
  ...color.prototype,
  ...flexbox.prototype,
  ...gridColumn.prototype,
  ...gridRow.prototype,
  ...layout.prototype,
  ...margin.prototype,
  ...position.prototype,
  ...space.prototype,
  ...typography.prototype,
};

export default Element;
