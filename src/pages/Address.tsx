import React, { FC } from "react";
import { Balloon, ChatDots, ChevronDown, Clipboard2, QrCode } from "react-bootstrap-icons";
import styled from "styled-components";
import MoreInfo from "../components/AddressPageComponents/MoreInfo";
import Overview from "../components/AddressPageComponents/Overview";
import TransactionBlock from "../components/AddressPageComponents/TransactionBlock";


const HeroSection = styled.div`
padding: 1rem;
display: flex;
justify-content: space-between;
border-bottom: 1px solid grey;
`;

const AddressDiv = styled.div`
display: inline-flex;
justify-content: space-evenly;

.address {
  font-size: 1.5rem;
  align-self: flex-end;
  color: #4A4F55;
  font-weight: 600;
  margin-right: 0.5rem;
}

.addressNum {
  font-size: 1.1rem;
  align-self: flex-end;
  color: #4A4F55;
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
}
`

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-evenly;

.btns{
  color: white;
  background-color: #3498DB;
  font-size: 12px;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  margin-right: 12px;

  .chevron {
    margin: 0 -0.5rem 0 0.5rem;
  }

}
`;

const Section = styled.div`
margin: 3rem auto 8rem;
padding: 1rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 1rem;
height: auto;
`


const Address: FC = () => {
  const buttonsContent = [
    "Buy", 
    "Exchange",
    "Earn",
    "Gaming"
  ]

  return (
    <>

    <HeroSection>
      <AddressDiv>
        <span className="address">Address</span>
        <span className="addressNum">0xC025C461Ae431Ac3D3897DA98f5c8FFA2b503306</span>
        <button className="button"><Clipboard2/></button>
        <button className="button"><QrCode/></button>
        <button className="button"><Balloon/></button>
        <button className="button"><ChatDots/></button>
        
      </AddressDiv>
      <ButtonsContainer>
        {
          buttonsContent.map((x)=> {
            return <button className="btns" key={x}>{x}  <ChevronDown className="chevron" fontWeight={800}/></button>
          })        }
      </ButtonsContainer>
    </HeroSection>
      <Section>
        <Overview/>
        <MoreInfo/>
      </Section>
      <TransactionBlock/>

    </>
  );
};

export default Address;
