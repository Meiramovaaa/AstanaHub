import {StyledMainheader,StyledMainParag} from "../style/mainStyle"
import Buttons from "./Buttons"

function MainInfo() {
  return (
    
    <div className="main-info">
        <StyledMainheader >Health </StyledMainheader>
        <StyledMainheader color="black">Care</StyledMainheader>
        <StyledMainParag>There are many variations of passages of Lorem Ipsum</StyledMainParag>
        <Buttons/>
        
    </div>
  );
}

export default MainInfo;
