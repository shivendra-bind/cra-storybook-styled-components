import styled from 'styled-components';
import { color } from 'styled-system';

const Box = styled.div`
  ${color}
`;
function App() {
  return (
    <div>
      <center>
        <Box bg="melon" color="green">
          Welcome
        </Box>
      </center>
    </div>
  );
}

export default App;
