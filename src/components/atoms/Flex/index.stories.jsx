import Box from '../Box';
import Flex from '.';

const FlexStory = {
  title: 'Design System/Atoms/Flex',
  component: Flex,
};

export default FlexStory;

export const Default = () => (
  <Flex>
    <Flex>item 1</Flex>
    <Flex>item 2</Flex>
    <Flex>item 3</Flex>
  </Flex>
);

export const Strech = () => (
  <Flex>
    <Flex
      flex={1}
      p={3}
      mx={3}
      bg="apricot"
    >
      item 1
    </Flex>
    <Flex
      flex={1}
      p={3}
      mx={3}
      bg="melon"
    >
      item 2
    </Flex>
    <Flex
      flex={1}
      p={3}
      mx={3}
      bg="apricot"
    >
      item 2
    </Flex>
  </Flex>
);

export const StrechMidle = () => (
  <Flex>
    <Flex
      p={3}
      mr={3}
      bg="apricot"
    >
      item 1
    </Flex>
    <Flex
      flex={1}
      p={3}
      bg="melon"
    >
      item 2
    </Flex>
    <Flex
      ml={3}
      p={3}
      bg="melon"
    >
      item 3
    </Flex>
  </Flex>
);

export const FlexColumn = () => (
  <Flex flexDirection="column">
    <Flex
      p={3}
      m={3}
      bg="apricot"
    >
      item 1
    </Flex>
    <Flex
      flex={1}
      p={3}
      m={3}
      bg="melon"
    >
      item 2
    </Flex>
    <Flex
      m={3}
      p={3}
      bg="apricot"
    >
      item 3
    </Flex>
  </Flex>
);
export const FlexWithBox = () => (
  <Flex>
    <Box
      p={3}
      m={3}
      bg="apricot"
    >
      item 1
    </Box>
    <Box
      flex={1}
      p={3}
      m={3}
      bg="melon"
    >
      item 2
    </Box>
    <Box
      m={3}
      p={3}
      bg="apricot"
    >
      item 3
    </Box>
  </Flex>
);
