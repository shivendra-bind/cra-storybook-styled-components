import styled from 'styled-components';

import media from '../../../styles/theme/helper';
import Flex from '../Flex';
import Box from '../Box';
import Grid from '.';
import template from './template';

const GridStory = {
  title: 'Design System/Atoms/Grid',
  component: Grid,
};

export default GridStory;

const Aside = styled(Flex)`
  justify-content: center;
  align-items: center;
  ${media.mobile` display:none`};
  ${media.tablet` display:none`}
`;
const CenterFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const EnhancedText = (props) => (
  <Box
    as="h1"
    {...props}
    fontSize={[1, 3, 5]}
    textAlign={['center', 'left', 'right']}
  />
);

export const Default = () => (
  <Grid>
    Grid
  </Grid>
);

export const Template = () => (
  <Grid
    gridGap={[1, 1, 2]}
    height="100vh"
    gridTemplateColumns={[
      template.mobile.columns,
      template.tablet.columns,
      template.desktop.columns,
    ]}
    gridTemplateRows={[
      template.mobile.rows,
      template.tablet.rows,
      template.desktop.rows,
    ]}
    gridTemplateAreas={[
      template.mobile.area,
      template.tablet.area,
      template.desktop.area,
    ]}
  >
    <CenterFlex
      justifyContent="center"
      alignItems="center"
      bg="apricot"
      gridArea="header"
    >
      <EnhancedText>Header</EnhancedText>
    </CenterFlex>
    <CenterFlex
      justifyContent="center"
      alignItems="center"
      gridArea="main"
      bg="englishLavender"
    >
      <EnhancedText>Main</EnhancedText>
    </CenterFlex>
    <CenterFlex
      justifyContent="center"
      alignItems="center"
      bg="pastelPink"
      gridArea="sidebar"
    >
      <EnhancedText>Side</EnhancedText>
    </CenterFlex>
    <CenterFlex
      justifyContent="center"
      alignItems="center"
      bg="oldLavender"
      gridArea="footer"
    >
      <EnhancedText>Footer</EnhancedText>
    </CenterFlex>
    <Aside bg="melon" gridArea="aside">
      <EnhancedText>Aside</EnhancedText>
    </Aside>
  </Grid>
);
