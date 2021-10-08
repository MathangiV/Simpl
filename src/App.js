import Bills from './sections/Bills';
import Merchants from './sections/Merchants';
import styled from 'styled-components';
import Transactions from './sections/Transactions';
import AccountStatus from './sections/AccountStatus';
import NavBar from './sections/NavBar';

const StyledContainer = styled.div`
  max-width : 768px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  background-color: #f6f6f6;
`;
function App() {
  return (
    <StyledContainer>
      <AccountStatus />
      <Bills />
      <Merchants />
      <Transactions />
      <NavBar />
    </StyledContainer>
  );
}

export default App;
