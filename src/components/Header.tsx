import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '../utils/flex/flex'
import { bgColor, buttonColor, hoverColor } from '../utils/themes/colors'
import ethereumLogo from '../Assets/logo-etherscan.svg'
import eth from '../Assets/ethereum-icon.webp'
import { linkFonts } from '../utils/typography/fonts'

const Header: FC = () => {
  const HeaderContainer = styled.div`
    backgroundcolor: ${bgColor.lightTheme};
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${buttonColor.lightTheme};
   
  `

  const MainHeader = styled(Flex)`
    .logo {
      height: 40px;
      width: 160px;
    }
  `

  const NavList = styled(Flex)`
    .nav {
        margin: 10px;
        padding: 0 5px;

        a{
            text-decoration: none;
            font-size: ${linkFonts};
            color: grey;

        }
        a:hover {
            color: ${hoverColor};
        }


        .signin {
            border-left: 0.5px solid grey;
            border-right: 0.5px solid grey;
            padding: 0 10px;
        }
    }
.btn {
    padding: 3px 3px;
    background-color: ${buttonColor.lightTheme};
    border: none;
    margin: 0 5px;
    cursor: pointer;
    .btn-image{
        width: 16px;
        height: 16px;
    }
}
  `;

  const navlinks = [
    {
        name: "Home",
        link: "https://www.etherscan.io"
    },
    {
        name: "Blockchain",
        link: "#"
    },
    {
        name: "Token",
        link: "#"
    },
    {
        name: "Resources",
        link: "#"
    },
    {
        name: "More",
        link: ""
    }
  ]

  return (
    <HeaderContainer>
      <MainHeader justifyContent="space-between">
        <a href="https://etherscan.io">
          <img src={ethereumLogo} alt="ethereumLogo" className="logo" />
        </a>

        <NavList justifyContent='space-between'>
            {navlinks.map(({name, link})=> {
               return <nav className='nav'> <a href={link} key={name}>{name}</a></nav>
            })}
        <nav className='nav'><a href='http://www.signin.com' className='signin'>Sign In</a></nav>
        <button className='btn'><img src={eth} alt="" className='btn-image'/></button>
        </NavList>
      </MainHeader>
    </HeaderContainer>
  )
}

export default Header
