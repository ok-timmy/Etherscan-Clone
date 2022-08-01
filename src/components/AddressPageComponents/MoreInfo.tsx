import React, { FC } from 'react'
import { QuestionCircle } from 'react-bootstrap-icons';
import styled from 'styled-components'

const MoreInfoDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  display: block;
  border-radius: 10px;
`
const MoreInfoDivHeader = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem;
  font-weight: bold;
`;

const MoreInfoContent = styled.div`
padding: 0 0.5rem;
height: auto;
`
const MoreInfoDetails = styled.div`
display: flex;
// border-bottom: 1px solid black;
padding: 1rem 0.5rem;
font-size: 1rem;

.name {
  flex: 4;
}

.balance {
  flex: 6;
  .login {
    text-decoration: none;
  }
}
`

const MoreInfo: FC = () => {
  return (
    <MoreInfoDiv>
      <MoreInfoDivHeader>More Info</MoreInfoDivHeader>
      <MoreInfoContent>
      <MoreInfoDetails>
          <span className='name'><QuestionCircle/> My Name Tag: </span>
          <span className='balance'>Not Available, <a href='#' className='login'>login to update</a></span>
        </MoreInfoDetails>
      </MoreInfoContent>
    </MoreInfoDiv>
  )
}

export default MoreInfo
