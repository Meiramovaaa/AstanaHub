import {StyledSlider, StyledSliderImg, StyledSliderMain} from "../style/mainStyle"
import img from "../img/arrow.png"
function Slider() {
  return (
    
    <StyledSliderMain className="slider">
        <StyledSlider>
            <StyledSliderImg left="left" src={img}/>
        </StyledSlider>
        <StyledSlider back="black">
            <StyledSliderImg src={img}/>
        </StyledSlider>
    </StyledSliderMain>
  );
}

export default Slider;
