import React, { FC } from "react";
import { FaEthereum } from "react-icons/fa";
import styled from "styled-components";

const OverviewDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  display: block;
  border-radius: 10px;
  padding: 1rem;
`;

const OverViewHeader = styled.div`
  font-weight: bold;
`;

const OverviewContent = styled.div`
  height: auto;
`;

const OverviewDetails = styled.div`
  margin: 1rem 0;

  h4{
    font-size: 12px;
    color: #6C757D;
    vertical-align: baseline;
    font-weight: 600;
  }

  div{
    display: flex;
    justify-content: start;
    vertical-align: baseline;
    height: 2rem;
    color: #212529;
  }
`;

const Overview: FC = () => {
  return (
    <OverviewDiv>
      <OverViewHeader>Overview</OverViewHeader>
      <OverviewContent>
        <OverviewDetails>
          <h4>ETH BALANCE</h4>
          <div>
            <FaEthereum style={{textAlign:"center", alignSelf:"baseline"}}/> 0 ETH
          </div>
        </OverviewDetails>
        <OverviewDetails>
          <h4>ETH VALUE</h4>
          <div>
            $0.00
          </div>
        </OverviewDetails>
      </OverviewContent>
    </OverviewDiv>
  );
};

export default Overview;
