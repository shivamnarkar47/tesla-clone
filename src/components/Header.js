import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {

  const [BurgerStatus, setBurgerStatus] = useState(false);


  return (
    <Container>
      <a href="#">
        <img
          src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
          width="150"
          alt="Tesla logo"
        />
      </a>
      <MenuGroup>
        <div>Model S</div>
        <div>Model X</div>
        <div>Model Y</div>
        <div>Model 3</div>
      </MenuGroup>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      
        <MenuIconContainer>
          <MenuIcon onClick={()=>setBurgerStatus(true)}/>
        </MenuIconContainer>
      </RightMenu>
      <BurgerNav status={BurgerStatus}>
        <CloseContainer>
        <Close onClick={()=>setBurgerStatus(false)}/>
        </CloseContainer>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Use Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>

      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:10;
`;

const Close = styled(CloseIcon)`
cursor:pointer;
`

const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  div {
    font-weight: 700;
    padding: 0 10px;
    cursor: pointer;
  }

  @media(max-width:768px){
    display:none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items:center;
  a {
    padding-right: 5px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const MenuIconContainer = styled.div`
  display:flex;
  align-items:center;
  cursor: pointer;
`

const BurgerNav = styled.div`
position:fixed;
width:300px;
background:white;
top:0;
right:0;
bottom:0;
padding:20px;
list-style:none;
transform:${props => props.status ? 'translateX(0)':'translateX(100%)'};
li{
  padding:15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
  a{
    font-weight: 600;
  }
}
transition:all 500ms;
`

const CloseContainer = styled.div`
display:flex;
justify-content:flex-end;
`