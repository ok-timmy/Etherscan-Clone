import React, { FC } from "react";
import { HeartFill } from "react-bootstrap-icons";
import styled from "styled-components";
import ethereeum from "../../Assets/ethereum-1.svg";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import { Company, Products, Resources } from "../../utils/links/link";
import { Flex } from "../../utils/flex/flex";
import { BsFacebook, BsMedium, BsTwitter } from "react-icons/bs";
import { GrReddit } from "react-icons/gr";
import { RxPinTop } from "react-icons/rx";
import {AiFillHeart} from 'react-icons/ai'

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  color: #212529;

  ${mediaQueries.tabport} {
    padding: 2.5rem;
  }
`;

const SuperFooter = styled(Flex)`
  justify-content: space-between;
  padding: 2.5rem 0.25rem;
  border-bottom: 1px solid black;

  .left {
    display: flex;
    flex-direction: row;
  }

  .toTop {
     a {
      text-decoration: none;
      color: #212529;

      &:hover {
        color: #0784C3;
      }
     }
  }
`;

const Icon = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #dee2e6;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const FooterTop = styled.div`
  padding: 1.5rem;
  flex: 4;
  display: grid;
  grid-template-columns: 4fr 7fr;
  grid-column-gap: 1.5rem;

  ${mediaQueries.tabport} {
    display: flex;
    flex-direction: column;
  }

  .ethereum-desc {
    h3 {
      display: flex;
      align-items: top;
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .col-1-desc {
      width: 65%;
      p {
        line-height: 20px;
        font-size: 12px;
        font-weight: 500;
      }
      ${mediaQueries.tabport} {
        width: 100%;
      }
    }
  }

  img {
    width: 20px;
    heignt: auto;
    margin-right: 12px;
  }
`;

const FooterNavList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6rem;

  ${mediaQueries.tabport} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
  }

  div {
    h3 {
      border-bottom: 0.1px solid white;
      font-size: 14px;
      padding-bottom: 1rem;
      font-weight: 600;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        line-height: 24px;
        a {
          text-decoration: none;
          color: #212529;
          font-size: 0.825rem;
          font-weight: 400;

          &:hover {
            color: blue;
          }
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
  padding: 1rem 0 1rem;
  font-size: 0.85rem;

  a{
    text-decoration: none;
  }
`;

const Footer: FC = () => {
  return (
    <FooterDiv>
      <SuperFooter>
        <div className="left">
          <Icon>
            <BsTwitter />
          </Icon>
          <Icon>
            <BsMedium />
          </Icon>
          <Icon>
            <BsFacebook />
          </Icon>
          <Icon>
            <GrReddit />
          </Icon>
        </div>
        <div className="toTop">
          <a href="http://localhost:3000">
            {" "}
            <RxPinTop /> Back to Top
          </a>
        </div>
      </SuperFooter>
      <FooterTop>
        <div className="ethereum-desc">
          <h3>
            {" "}
            <img src={ethereeum} alt="" /> Powered by Ethereum
          </h3>
          <div className="col-1-desc">
            <p>
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </p>
          </div>
        </div>

        <FooterNavList>
          <div>
            <h3>Company</h3>
            <ul>
              {Company.map(({ name, link }) => {
                return (
                  <li key={name}>
                    {" "}
                    <a href={link}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              {Resources.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <a href={link}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Products & Service</h3>
            <ul>
              {Products.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <a href={link}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </FooterNavList>
      </FooterTop>
      <FooterBottom>
        <div>
          Etherscan © 2023 (F1)
        </div>

        <div>
          Donations  <a href="http://localhost:3000">0x5a......963798fF52 </a> <AiFillHeart color="red"/>
        </div>
      </FooterBottom>
    </FooterDiv>
  );
};

export default Footer;
