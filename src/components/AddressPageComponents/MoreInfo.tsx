import React, { FC } from 'react'
import { ChevronDown, HeartFill, QuestionCircle } from 'react-bootstrap-icons'
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
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid black;

  .more__info {
    font-weight: bold;
  }
  .more__div {
    display: flex;
    justify-content: space-between;

    div {
      padding: 0.0625rem 0.5rem;
      background: #D5DAE2;
      margin-right: 8px;
      font-size: 12px;
      border-radius: 4px;
      cursor: pointer;

    }
  }
`

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
      <MoreInfoDivHeader>
        <div className='more__info'>More Info</div>{' '}
        <div className='more__div'>
          <div>
            <HeartFill  color='#3498db'/>
          </div>{' '}
          <div>More <ChevronDown/></div>
        </div>
      </MoreInfoDivHeader>
      <MoreInfoContent>
        <MoreInfoDetails>
          <span className="name">
            <QuestionCircle /> My Name Tag:{' '}
          </span>
          <span className="balance">
            Not Available,{' '}
            <a href="#" className="login">
              login to update
            </a>
          </span>
        </MoreInfoDetails>
      </MoreInfoContent>
    </MoreInfoDiv>
  )
}

export default MoreInfo
