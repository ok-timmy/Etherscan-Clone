import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../../utils/flex/flex'
import { bgColor, buttonColor, hoverColor } from '../../utils/themes/colors'
import ethereumLogo from '../Assets/logo-etherscan.svg'
import eth from '../Assets/ethereum-icon.webp'
import { linkFonts } from '../../utils/typography/fonts'
import { ChevronDown, ChevronRight, PersonCircle } from 'react-bootstrap-icons'
import SearchForm from '../HomePageComponents/SearchForm'
import { useLocation } from 'react-router-dom'
import { mediaQueries } from '../../utils/themes/mediaQueries'

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
    background: #f8f9f9;
    border-radius: 5px;
    word-spacing: 4px;

    .diff {
      color: green;
    }
  }
`

const NavList = styled(Flex)`

${mediaQueries.tabland} {
  width: 95vw;
}

  .nav {
    margin: 12px;
    padding: 0 5px;
    position: relative;
    display: inline-block;
    &:hover {
      .dropdown {
        display: block;
      }
    }

    span, a {
      cursor: pointer;
      text-decoration: none;
      font-size: ${linkFonts.fontSize};
      color: grey;
      &:hover {
        color: ${hoverColor.lightTheme};
      }
    }

    .dropdown {
      display: none;
      position: absolute;
      right: -9rem;
      top: 0;
      margin-top: 2rem;
      border-top: 0.25rem solid blue;
      background: white;
      z-index: 10000;
      text-align:left;
      min-width: 14rem;
      font-size: 0.9rem;
      padding: 1rem 0;
      box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
      border-radius: 0 0 12px 12px;
    
      
      ul {
        list-style: none;
        display:block;
        
        li {
          padding: 0.5rem 0;
          cursor: pointer;
        }
      }
  
      .big__dropdown__innerdiv{
        min-width: 95vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 1.5rem 4rem 1.5rem 2rem;

        ${mediaQueries.tabland} {
          min-width: 85vw !important;
        }
  
        div {
          font-size: 0.85rem;
          h5 {
            font-size: 0.9rem;
            font-weight: 900;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
  
            li{
              padding: 0.5rem 0;
              font-weight: 700;
              cursor: pointer;
            }
          }
        }
      }
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
    position: relative;

    &:hover {
      .btn-nav {
        display: block;
      }
    }
    .btn-image {
      width: 16px;
      height: 16px;
    }
    .btn-nav {
      display: none;
      position absolute;
      transition: all 3s;
      right: 0rem;
      top: 2.5rem;
      border-top: 0.25rem solid blue;
      background: white;
      z-index: 10000;
      text-align:left;
      width: 14rem;
      padding: 1rem 1rem;
      box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
      border-radius: 0 0 12px 12px;

      &:hover {
        display: block;
      }

      ul {
        display: block;
        list-style: none;
        margin: 0;
        padding: 0.75rem 0.5rem;
        font-size: 0.9rem;

        li {
          padding: 0.5rem 0.5rem;
        }
      }
    }

  }
  
`

const Header: FC = () => {
  const location = useLocation()
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const setScreen = () => {
    const width = window.innerWidth
    setScreenSize(width)
  }

  useEffect(() => {
    window.addEventListener('resize', setScreen)
    return () => window.removeEventListener('resize', setScreen)
  }, [])

  return (
    <HeaderContainer>
      <MainHeader justifyContent="space-between" flexWrap='wrap'>
        <div>
          <a href="https://etherscan.io">
            <img src={ethereumLogo} alt="ethereumLogo" className="logo" />
          </a>
          {location.pathname !== '/' && (
            <p className="bal">
              Eth: $1,697.92 <span className="diff">(+0.05%)</span> | 10 Gwei
            </p>
          )}
        </div>

        <div>
          {location.pathname !== '/' && screenSize >= 760 && (
            <SearchForm
              maxWidth={'100%'}
              fontSize={'14px'}
              height={'2.4rem'}
              margin={'0.25rem 0 0.25rem'}
            />
          )}
          <NavList justifyContent="space-between">
            <nav className="nav">
              {' '}
              <a href="https://etherscan.io">Home</a>
            </nav>

            <nav className="nav">
              <span>
                Blockchain <ChevronDown fontSize={'10px'} />
              </span>
              <div className="dropdown">
                <ul>
                  <li>View Txn</li>
                  <li>View Pending Txn</li>
                  <li>View Contract Internal Txn</li>
                </ul>
                <ul>
                  <li>View Blocks</li>
                  <li>Forked Blocks (Reorgs)</li>
                  <li>View Uncles</li>
                </ul>
                <ul>
                  <li>Top Accounts</li>
                  <li>Verified Contract</li>
                </ul>
              </div>
            </nav>

            <nav className="nav">
              <span>
                Token <ChevronDown fontSize={'10px'} />
              </span>
              <div className="dropdown">
                <ul>
                  <li>ERC20 Top Tokens</li>
                  <li>View ERC20 Transfers</li>
                </ul>
                <ul>
                  <li>ERC721 Top Tokens</li>
                  <li>View ERC721 Transfers</li>
                </ul>
                <ul>
                  <li>ERC1155 Top Tokens</li>
                  <li>View ERC1155 Transfers</li>
                </ul>
              </div>
            </nav>

            <nav className="nav">
              <span>
                Resources <ChevronDown fontSize={'10px'} />
              </span>
              <div className="dropdown">
                <ul>
                  <li>Charts & Stats</li>
                  <li>Top Statistics</li>
                  <li>Developer's API</li>
                </ul>
                <ul>
                  <li>Ethereum Dictionary</li>
                </ul>
              </div>
            </nav>

            <nav className="nav">
              <span>
                More <ChevronDown fontSize={'10px'} />
              </span>
              <div className="dropdown">
                <div className="big__dropdown__innerdiv">
                  <div>
                    <h5>Developers</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> API Documentation
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Verify Contract
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Byte To Opcode
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Broadcast TXN
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Vyper Online
                        Compiler
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Smart Contract
                        Search
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Contract Diff
                        Checker
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>DeFi</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} />
                        DEX Exchange
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} />
                        DEX Trading Pairs
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} />
                        NFT Pair Tracker
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>Explore</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Gas Tracker
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Node Tracker
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Ethereum Node
                        Lookup
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Etherscan Connect
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Eth2 Beacon Chain
                        Deposit
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> IDM
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>Tools</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Label Word Cloud
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Mining Calculator
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Verified Signature
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Token Approval
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Unit Converter
                      </li>
                      <li>
                        <ChevronRight fontSize={'0.5rem'} /> Blockscan Chat
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <nav className="nav">
              <a href="http://www.signin.com" className="signin">
                <PersonCircle /> Sign In
              </a>
            </nav>
            <button className="btn">
              <img src={eth} alt="" className="btn-image" />
              <div className="btn-nav">
                <ul>
                  <li>Ethereum Mainnet</li>
                  <li>Ethereum Mainnet</li>
                </ul>
                <ul>
                  <li>Ropsten Mainnet</li>
                  <li>Kovan Mainnet</li>
                  <li>Rinkeby Mainnet</li>
                  <li>Goerli Mainnet</li>
                  <li>Sepolia Mainnet</li>
                </ul>
                <ul>
                  <li>Beacon Scan</li>
                </ul>
              </div>
            </button>
          </NavList>
        </div>
      </MainHeader>
    </HeaderContainer>
  )
}

export default Header
