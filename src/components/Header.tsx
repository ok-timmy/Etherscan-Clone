import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '../utils/flex/flex'
import { bgColor, buttonColor, hoverColor } from '../utils/themes/colors'
import ethereumLogo from '../Assets/logo-etherscan.svg'
import eth from '../Assets/ethereum-icon.webp'
import { linkFonts } from '../utils/typography/fonts'
import { ChevronDown, PersonCircle } from 'react-bootstrap-icons'
import SearchForm from './SearchForm'

const Header: FC = () => {
  const HeaderContainer = styled.div`
    backgroundcolor: ${bgColor.lightTheme};
    padding: 0.25rem 1rem;
    border-bottom: 1px solid ${buttonColor.lightTheme};
  `

  const MainHeader = styled(Flex)`
    .logo {
      height: 40px;
      width: 160px;
      margin-bottom: 8px;

    }
    .bal {
      padding: 0.2rem 0.6rem;
      font-size: 0.8rem;
      background: #F8F9F9;
      border-radius: 5px;
      word-spacing: 4px;

      .diff{
        color: green;
      }
    }
  `

  const NavList = styled(Flex)`
    .nav {
      margin: 12px;
      padding: 0 5px;

      a {
        text-decoration: none;
        font-size: ${linkFonts.fontSize};
        color: grey;
      }
      a:hover {
        color: ${hoverColor.lightTheme};
      }

      .signin {
        border-left: 0.3px solid grey;
        border-right: 0.3px solid grey;
        padding: 0 10px;
      }
    }
    .btn {
      padding: 3px 3px;
      background-color: ${buttonColor.lightTheme};
      border: none;
      margin: 0 5px;
      cursor: pointer;
      .btn-image {
        width: 16px;
        height: 16px;
      }
    }
  `

  const navlinks = [
    {
      name: 'Blockchain',
      link: '#',
    },
    {
      name: 'Token',
      link: '#',
    },
    {
      name: 'Resources',
      link: '#',
    },
    {
      name: 'More',
      link: '',
    },
  ]

  return (
    <HeaderContainer>
      <MainHeader justifyContent="space-between">
        <div>
        <a href="https://etherscan.io">
          <img src={ethereumLogo} alt="ethereumLogo" className="logo" />
        </a>
        <p className='bal'>Eth: $1,697.92  <span className='diff'>(+0.05%)</span>  |  10 Gwei</p>
        </div>

        <div>
          <SearchForm maxWidth={'50vw'} fontSize={'14px'} height={'2.4rem'} margin={'0.25rem 0 0.25rem'}/>
        <NavList justifyContent="space-between">
              <nav className="nav">
                {' '}
                <a href='https://etherscan.io'>Home</a>
              </nav>
          {navlinks.map(({ name, link }) => {
            return (
              <nav className="nav" key={name}>
                {' '}
                <a href={link}>{name} <ChevronDown fontSize={'10px'}/></a>
              </nav>
            )
          })}
          <nav className="nav">
            <a href="http://www.signin.com" className="signin">
              <PersonCircle /> Sign In
            </a>
          </nav>
          <button className="btn">
            <img src={eth} alt="" className="btn-image" />
          </button>
        </NavList>
        </div>
      </MainHeader>
    </HeaderContainer>
  )
}

export default Header
