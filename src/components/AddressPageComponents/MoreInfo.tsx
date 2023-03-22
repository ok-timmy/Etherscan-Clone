import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const MoreInfoDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  display: block;
  border-radius: 10px;
  padding: 1rem;
`;
const MoreInfoDivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;

  .more__info {
    font-weight: bold;
  }
`;

const MoreInfoContent = styled.div`
  height: auto;

  h4{
    font-size: 12px;
    margin: 0.5rem 0;
  }
`;

const AddButton = styled.button`
padding: 4px 16px;
background-color: transparent;
border: 1px dashed #E9ECEF;
border-radius: 800px;
text-align: center;
vertical-align: baseline;

&:hover{
  background-color: #E9ECEF;
}
`

const MoreInfo: FC = () => {
  return (
    <MoreInfoDiv>
      <MoreInfoDivHeader>
        <div className="more__info">More Info</div>{" "}
      </MoreInfoDivHeader>
      <MoreInfoContent>
        <h4>PRIVATE NAME TAGS</h4>
        <AddButton>
          <AiOutlinePlus fontSize={"16px"}/> Add
        </AddButton>
        <h4>NO TEXT SENT FROM THIS ADDRESS</h4>
      </MoreInfoContent>
    </MoreInfoDiv>
  );
};

export default MoreInfo;
