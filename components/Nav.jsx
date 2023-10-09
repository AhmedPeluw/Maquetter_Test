import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaBagShopping } from 'react-icons/fa6';
import { RiRestaurant2Fill,RiInformationFill } from 'react-icons/ri';
import { AiOutlineBook, AiOutlineRest } from 'react-icons/ai';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { LiaSearchSolid } from 'react-icons/lia';
import { ImQrcode } from 'react-icons/im';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { useState } from 'react';


const LogoBarContainer = styled.div`
  display: flex;  
  justify-content: center;
  height: 68px;
  
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: space-around;
  
  text-align: center;
  width: 100%;
`;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 45px;
  width: 373px;
  
  border-radius: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const activeBgStyles = {
  backgroundColor: "#303189",
  color: "#ffffff",
};

const inactiveBgStyles = {
  backgroundColor: "#ffffff",
  color: "#303189",
};

const activeTxtStyles = {  
  color: "#ffffff",
};

const inactiveTxtStyles = {  
  color: "#909090",
};

const NavButton = styled.button`
  border: none;
  padding: 10px 12px 8px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 30px;
  width: 123px;
  height: 45px;
  ${(props) => (props.$isActive ? activeBgStyles : inactiveBgStyles)};
`;

const ButtonText = styled.span`
  margin-left:6px;  
  font-size:14px;  
  font-weight:300;
  ${(props) => (props.$isActive ? activeTxtStyles : inactiveTxtStyles)};
`;

const Icon = styled.div`
  ${(props) => (props.$isActive ? activeTxtStyles : inactiveTxtStyles)};
`;

const Image = styled.img`
  width:50px;
  height:50px
`;


const Nav = () => {

  const [activeButton, setActiveButton] = useState('Magasins');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  
  return (
    <>
      <LogoBarContainer>
        <LogoBar>
          <div style={{ width:'30%'}}>
            <div style={{ display: 'inline-block', marginRight:50, marginTop:9 }}>
              <PiDotsThreeVerticalBold color='#303189' size={45} />
            </div>
          </div>

          <div style={{ width:'30%', paddingTop:14, paddingLeft:17}}>
            <img src="/assets/logo.png" alt="" width={90} height={90}/>
          </div>

          <div style={{ width:'30%', display: 'flex', alignItems: 'center' ,paddingLeft:27, paddingBottom:3}}>            
            <LiaSearchSolid size={24} color='#303189' style={{ marginRight: '10px' }} />
            <Image src="/assets/qrcode.png" alt="Your Image Alt Text"  />
          </div>

        </LogoBar>
      </LogoBarContainer>

      <NavBarContainer>
        <NavBar>
          <NavButton onClick={() => handleButtonClick("Magasins")} $isActive={activeButton === "Magasins"}>
            <Icon $isActive={activeButton === "Magasins"}>
              <FaBagShopping size={13} />
            </Icon>
            <ButtonText $isActive={activeButton === "Magasins"}>Magasins</ButtonText>
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Restauration")} $isActive={activeButton === "Restauration"}>
            <Icon $isActive={activeButton === "Restauration"}>
              <RiRestaurant2Fill size={16} />
            </Icon>
            <ButtonText $isActive={activeButton === "Restauration"}>Restauration</ButtonText>
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Informations")} $isActive={activeButton === "Informations"}>
            <Icon $isActive={activeButton === "Informations"}>
              <RiInformationFill size={13} />
            </Icon>
            <ButtonText $isActive={activeButton === "Informations"}>Informations</ButtonText>
          </NavButton>
        </NavBar>
      </NavBarContainer>
    </>
  );
};

export default Nav;