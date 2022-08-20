import React, { FC } from 'react'
import {
  Balloon,
  ChatDots,
  ChevronDown,
  Clipboard2,
  Lightbulb,
  QrCode,
} from 'react-bootstrap-icons'
import styled from 'styled-components'
import MoreInfo from '../components/AddressPageComponents/MoreInfo'
import Overview from '../components/AddressPageComponents/Overview'
import TransactionBlock from '../components/AddressPageComponents/TransactionBlock'
import { mediaQueries } from '../utils/themes/mediaQueries'

const HeroSection = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`

const AddressDiv = styled.div`
  display: inline-flex;
  justify-content: space-evenly;

  .address {
    font-size: 1.5rem;
    align-self: flex-end;
    color: #4a4f55;
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .addressNum {
    font-size: 1.1rem;
    align-self: flex-end;
    color: #7b8a96;
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .button {
    align-self: flex-end;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    font-size: 0.8rem;
    border: none;
    margin-right: 0.5rem;

    :hover {
      background: #7b8a96;
      color: white;
    }
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  .btns {
    color: white;
    background-color: #3498db;
    font-size: 12px;
    border: none;
    padding: 0 16px;
    border-radius: 4px;
    margin-right: 12px;
    height: 2rem;



    .chevron {
      margin: 0 -0.5rem 0 0.5rem;
    }
  }
`

const Section = styled.div`
  margin: 3rem auto 5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  height: auto;

  ${mediaQueries.tabport} {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 1rem;
  }
`

const Address: FC = () => {
  const buttonsContent = ['Buy', 'Exchange', 'Earn']
  return (
    <div style={{ backgroundColor: '#FCFCFD' }}>
      <HeroSection>
        <AddressDiv>
          <span className="address">Address</span>
          <span className="addressNum">
            0xC025C461Ae431Ac3D3897DA98f5c8FFA2b503306
          </span>
          <button className="button">
            <Clipboard2 />
          </button>
          <button className="button">
            <QrCode />
          </button>
          <button className="button">
            <Balloon />
          </button>
          <button className="button">
            <ChatDots />
          </button>
        </AddressDiv>
        <ButtonsContainer>
          {buttonsContent.map((x) => {
            return (
              <button className="btns" key={x}>
                {x} <ChevronDown className="chevron" fontWeight={800} />
              </button>
            )
          })}
        </ButtonsContainer>
      </HeroSection>

      <Section>
        <Overview />
        <MoreInfo />
      </Section>

      <div style={{ padding: '1rem 1rem' }}>
        <TransactionBlock />
      </div>

      <div style={{padding: "1rem 1rem 3rem",fontSize: "12px", fontWeight: "400"}}>
        <Lightbulb style={{marginRight: "5px"}}/>A wallet address is a publicly available address that
        allows its owner to receive funds from another party. To access the
        funds in an address, you must have its private key. Learn more about
        addresses in our <a href='#'>Knowledge Base.</a>
      </div>
    </div>
  )
}

export default Address
