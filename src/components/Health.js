import img1 from "../img/health1.png"
import img2 from "../img/health2.png"
import arrow from "../img/arrow.png"
import {StyledHealth, StyledHealthH2,StyledHealthButton,StyledHealthimg1,StyledHealthAbsolute, StyledHealthimg2, StyledHealthp, StyledHealthDivImg} from "../style/healthStyle"
function Health() {
  return (
    <StyledHealth className="health">
        
        <StyledHealthH2>Best Of Health care for you</StyledHealthH2>
        <StyledHealthp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</StyledHealthp>
        <StyledHealthDivImg>
            <StyledHealthAbsolute></StyledHealthAbsolute>
            <StyledHealthimg1 src={img1} />
            <StyledHealthimg2 src={img2} />
        </StyledHealthDivImg>
        <StyledHealthButton>
            Read more
            <img src={arrow}/>
        </StyledHealthButton>
    </StyledHealth>
  );
}

export default Health;
