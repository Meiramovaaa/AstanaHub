import Header from './Header';
import { StyledBack } from '../style/baseStyled';
import Main from './Main';
import Health from './Health';
import Knowledge from './Knowledge';
import Choose from './Choose';
function App() {
  return (
    <div className='App'>
      <StyledBack>
        <Header />
        <Main />
      </StyledBack>
      <Health />
      <Knowledge />
      <Choose />
    </div>
  );
}

export default App;
