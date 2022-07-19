import React, { FC } from 'react'
import { HeartFill } from 'react-bootstrap-icons'
import styled from 'styled-components'
import ethereeum from '../Assets/ethereum.svg'

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #22335c;
  padding: 1rem;
  color: white;
`

const FooterTop = styled.div`
  flex: 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  h2 {
    display: flex;
    align-items: top;
    img {
      width: 20px;
      heignt: auto;
      margin-right: 12px;
    }
  }
  .col-1-desc {
    font-size: 14px;
    line-height: 24px;
  }
`

const FooterBottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
`

const Footer: FC = () => {
  const Company = [
    {
      name: 'About Us',
      link: 'https://etherscan.io/aboutus',
    },
    {
      name: 'Contact Us',
      link: 'https://etherscan.io/contactus',
    },
    {
      name: 'Brand Assets',
      link: 'https://etherscan.io/contactus',
    },
    {
      name: 'Careers',
      link: 'https://etherscan.io/contactus',
    },
    {
      name: 'Terms Of Service',
      link: 'https://etherscan.io',
    },
    {
      name: 'Bug Bounty',
      link: 'https://etherscan.io',
    },
  ]

  const Resources = [
    {
      name: 'API Documentation',
      link: 'https://www.etherscan.io',
    },
    {
      name: 'Knowledge Base',
      link: 'https://www.etherscan.io',
    },
    {
      name: 'Newsletter',
      link: 'https://www.etherscan.io',
    },
    {
      name: 'Network Status',
      link: 'https://www.etherscan.io',
    },
    {
      name: 'Disqus Comments',
      link: 'https://www.etherscan.io',
    },
  ]

  const Products = [
    {
      name: "Advertise", 
      link: "https://www.etherscan.io"
    },
    {
      name: "Explorer-As-A-Service", 
      link: "https://www.etherscan.io"
    },
    {
      name: "Developer API", 
      link:"https://www.etherscan.io"
    },
    {
      name: "Blockscan", 
      link: "https://www.etherscan.io"
    },
    {
      name: "Beaconscan", 
      link: "https://www.etherscan.io"
    },
  ]

  return (
    <FooterDiv>
      <FooterTop>
        <div>
          <h2>
            {' '}
            <img src={ethereeum} alt="" /> Powered by Ethereum
          </h2>
          <p className="col-1-desc">
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            {Company.map(({ name, link }) => {
              return (
                <li key={name}>
                  {' '}
                  <a href={link}>{name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h3>
            Resources
          </h3>
          <ul>
            {Resources.map(({name, link})=> {
              return <li key={name}><a href={link}>{name}</a></li>
            })}
          </ul>
        </div>
        <div>
          <h3>Products & Service</h3>
          <ul>
            {Products.map(({name, link})=> {
              return <li key={name}><a href={link}>{name}</a></li>
            })}
          </ul>
        </div>
      </FooterTop>
      <FooterBottom>
        <div>
          Etherscan © 2022 (B1) |{' '}
          <span>
            {' '}
            Donate <HeartFill color="red" />{' '}
          </span>
        </div>
      </FooterBottom>
    </FooterDiv>
  )
}

export default Footer
