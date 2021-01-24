import styled from 'styled-components';
import {
  alignItems,
  alignSelf,
  background,
  flex,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnGap,
  gridGap,
  gridRow,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  layout,
  position,
} from 'styled-system';
import Box from '../Box';

const Grid = styled(Box)(
  { display: 'grid' },
  alignItems,
  alignSelf,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  background,
  flex,
  layout,
  position,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
);

Grid.displayName = 'Grid';

Grid.propTypes = {
  ...gridGap.propTypes,
  ...gridColumnGap.propTypes,
  ...gridRowGap.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridAutoFlow.propTypes,
  ...gridAutoColumns.propTypes,
  ...gridAutoRows.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
  ...gridTemplateAreas.propTypes,
  ...gridArea.propTypes,

};

export default Grid;
