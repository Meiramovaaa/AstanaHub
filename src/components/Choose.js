import img1 from '../img/phone.png';
import img2 from '../img/dispng.png';
import img3 from '../img/hospital.png';
import arrow from '../img/arrow.png';
import {
  StyledChoose,
  StyledImg,
  Styledh3,
  StyledChooseButton,
  Styledheader,
  StyledCardParant,
  StyledCardItem,
  Styledp,
} from '../style/chooseStyle';
function Choose() {
  return (
    <StyledChoose className='choose'>
      <Styledheader>Why choose 24hr home care</Styledheader>
      <Styledp>labore et dolore magna aliqua. Ut enim ad minim veniam</Styledp>

      <StyledCardParant className='choose-card'>
        <StyledCardItem className='choose-item'>
          <StyledImg src={img1} />
          <Styledh3>Daily care experts</Styledh3>
        </StyledCardItem>
        <StyledCardItem back='!black' className='choose-item'>
          <StyledImg src={img2} />
          <Styledh3>Available 24/7</Styledh3>
        </StyledCardItem>
        <StyledCardItem className='choose-item'>
          <StyledImg src={img3} />
          <Styledh3>Balanced care</Styledh3>
        </StyledCardItem>
      </StyledCardParant>

      <StyledChooseButton>
        Get A Quote
        <img src={arrow} />
      </StyledChooseButton>
    </StyledChoose>
  );
}

export default Choose;
