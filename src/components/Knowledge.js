import {StyledKnowDiv, StyledHeader,StyledItem2,StyledImg,StyledP, StyledItem1} from "../style/knowStyle"
import play from "../img/play.png"
function Knowledge() {
  return (
    <StyledKnowDiv >
        <StyledItem1>
            <StyledHeader>Knowledge of center</StyledHeader>
            <StyledP>Knowledge of centerLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</StyledP>
        </StyledItem1>


        <StyledItem2>
            <StyledImg src={play}/>
        </StyledItem2>
    </StyledKnowDiv>
  );
}

export default Knowledge;
