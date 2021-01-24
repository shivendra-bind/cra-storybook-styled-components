import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system';

import Box from '../Box';

const Text = styled(Box)(
  {},
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
);

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
};

Text.displayName = 'Text';

export default Text;
