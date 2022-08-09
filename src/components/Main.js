import MainInfo from "./MainInfo";
import {StyledMain} from "../style/mainStyle"
import MainImg from "./MainImg"
import Slider from "./Slider"
function Main() {
  return (
    
    <StyledMain className="main">
        <MainInfo/>
        <MainImg/>
        <Slider/>
    </StyledMain>
  );
}

export default Main;
