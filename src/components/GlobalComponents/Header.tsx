import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../utils/flex/flex";
import { bgColor, buttonColor, hoverColor } from "../../utils/themes/colors";
import ethereumLogo from "../../Assets/logo-etherscan.svg";
import eth from "../../Assets/ethereum-icon.webp";
import { linkFonts } from "../../utils/typography/fonts";
import { ChevronDown, ChevronRight, PersonCircle } from "react-bootstrap-icons";
import SearchForm from "../HomePageComponents/SearchForm";
import { useLocation } from "react-router-dom";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const HeaderContainer = styled.div`
  backgroundcolor: ${bgColor.lightTheme};
  border-bottom: 1px solid ${buttonColor.lightTheme};
`;

const SuperHeader = styled(Flex)`
  justify-content: space-between;
  padding: 0.25rem 1rem;
  border-bottom: 1px solid #212529;

  .search--header {
    display: flex;
    flex-direction: row;
  }

  .bal {
    color: #6c757d;
    font-size: 0.8rem;
    font-weight: 700;

    .diff{
      color: #00a186;
      margin-right: 0.5rem;
    }

    .price{
      color: #066A9C;
      cursor: pointer;

      &:hover {
text-decoration: underline;
      }
    }
  }

  .btn {
    padding: 0.25rem 0.5rem;
    background-color: ${buttonColor.lightTheme};
    border: none;
    margin: 0.5rem 0.5rem 0;
    cursor: pointer;
    position: relative;

    &:hover {
      .btn-nav {
        display: block;
      }
    }
    .btn-image {
      width: 24px;
      height: 24px;
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
`;

const MainHeader = styled(Flex)`
padding: 0.25rem 1rem;

  .logo {
    height: 40px;
    width: 160px;
    margin-bottom: 8px;
  }
`;

const NavList = styled(Flex)`

${mediaQueries.tabland} {
  width: 95vw;
}

  .nav {
    margin: 6px;
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
      font-weight: 600;
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
 

  }
  
`;

const Header: FC = () => {
  const location = useLocation();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const setScreen = () => {
    const width = window.innerWidth;
    setScreenSize(width);
  };

  useEffect(() => {
    window.addEventListener("resize", setScreen);
    return () => window.removeEventListener("resize", setScreen);
  }, []);

  return (
    <HeaderContainer>
      <SuperHeader>
        <div>
          {" "}
          <p className="bal">
            <span>ETH Price </span> <span className="price">$1,697.92 </span>{" "}
            <span className="diff">(+0.05%)</span> Gas{" "}
            <span className="price"> 10 Gwei</span>
          </p>
        </div>

        <div className="search--header">
          {location.pathname !== "/" && screenSize >= 760 && (
            <SearchForm
              // maxWidth={"800px"}
              fontSize={"14px"}
              height={"2.4rem"}
              margin={"0.25rem 0 0.25rem"}
            />
          )}

          <div>
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
          </div>
        </div>
      </SuperHeader>
      <MainHeader justifyContent="space-between" flexWrap="wrap">
        <div>
          <a href="https://etherscan.io">
            <img src={ethereumLogo} alt="ethereumLogo" className="logo" />
          </a>
        </div>

        <div>
          <NavList justifyContent="space-between">
            <nav className="nav">
              {" "}
              <a href="https://etherscan.io">Home</a>
            </nav>

            <nav className="nav">
              <span>
                Blockchain <ChevronDown fontSize={"10px"} />
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
                Token <ChevronDown fontSize={"10px"} />
              </span>
              <div className="dropdown">
                <ul>
                  <li> Top Tokens (ERC-20)</li>
                  <li>Token Transfers (ERC-20)</li>
                </ul>
              </div>
            </nav>

            <nav className="nav">
              <span>
                NFTs <ChevronDown fontSize={"10px"} />
              </span>
              <div className="dropdown">
                <ul>
                  <li>Top NFTs</li>
                  <li>Latest Trades</li>
                  <li>Latest Transfers</li>
                  <li>Latest Mints</li>
                </ul>
              </div>
            </nav>

            <nav className="nav">
              <span>
                Resources <ChevronDown fontSize={"10px"} />
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
                Developers <ChevronDown fontSize={"10px"} />{" "}
              </span>
              <div className="dropdown">
                <ul>
                  <li>API Documentation</li>
                  <li>Verify Contract</li>
                  <li>Byte To Opcode</li>
                  <li>Broadcast TXN</li>
                  <li>Vyper Online Compiler</li>
                  <li>Smart Contract Search</li>
                  <li>Contract Diff Checker</li>
                </ul>
              </div>
            </nav>

            <nav className="nav">
              <span>
                More <ChevronDown fontSize={"10px"} />
              </span>
              <div className="dropdown">
                <div className="big__dropdown__innerdiv">
                  <div>
                    <h5>DeFi</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} />
                        DEX Exchange
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} />
                        DEX Trading Pairs
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} />
                        NFT Pair Tracker
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>Explore</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Gas Tracker
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Node Tracker
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Ethereum Node
                        Lookup
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Etherscan Connect
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Eth2 Beacon Chain
                        Deposit
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> IDM
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>Tools</h5>
                    <ul>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Label Word Cloud
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Mining Calculator
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Verified Signature
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Token Approval
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Unit Converter
                      </li>
                      <li>
                        <ChevronRight fontSize={"0.5rem"} /> Blockscan Chat
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
          </NavList>
        </div>
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
