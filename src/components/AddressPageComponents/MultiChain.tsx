import React, { FC } from "react";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";

const MultiChainDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  display: block;
  border-radius: 10px;
  padding: 1rem;
`;
const MultiChainDivHeader = styled.div`
  .more__info {
    font-weight: bold;
  }
`;

const MultiChainContent = styled.div`
  height: auto;

  h4{
    font-size: 12px;
    margin: 0.5rem 0;
  }

  span{
    color: blue;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
  }
`;

const MultiChain: FC = () => {
  return (
    <MultiChainDiv>
      <MultiChainDivHeader>
        <div className="more__info">Multi Chain</div>{" "}
      </MultiChainDivHeader>
      <MultiChainContent>
      <h4>MULTICHAIN ADDRESSES</h4>
      <span>1 Address found via Blockspan </span><FiExternalLink/>
      </MultiChainContent>
    </MultiChainDiv>
  );
};

export default MultiChain;
