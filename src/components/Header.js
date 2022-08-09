import HeaderLogo from "./HeaderLogo";
import {StyledHeader, HeaderLinks, Link} from "../style/headerStyled"
import searchIcon from "../img/search-icon.png"

function Header() {
  return (
    <StyledHeader className="header">
        <HeaderLogo/>
        <HeaderLinks className="header-links">
            <Link>Home</Link>
            <Link>Health</Link>
            <Link>Medicine</Link>
            <Link>News</Link>
            <Link>Client</Link>
            <Link>Contact Us</Link>
            <img src={searchIcon}/>
        </HeaderLinks>
    </StyledHeader>
    
  );
}

export default Header;
