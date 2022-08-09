import React, { FC } from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../utils/themes/mediaQueries'

const Tx = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 1rem;
  border-bottom: 0.2px solid #77838f;
  width: auto;

  ${mediaQueries.tabport} {
    grid-template-columns: 1fr;
  }
`

const TxLeft = styled.div`
display: flex;
margin: 0;

  .blocktag {
    background-color: #f1f2f4;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 1rem;
    :after{
      content: "Bk";
    }

    ${mediaQueries.tabport} {
      background-color: white;
      font-weight: bold;
      padding:0;
      height: auto;
      width: auto;
      :after {
        content: "Block";
      }
    }
  }


  ul {
    list-style: none;
    margin: 0 2rem 0 -2rem;

    ${mediaQueries.tabport} {
      display: flex;
      align-items: flex-end;
    }

    .blockNumber {
      color: #3498DB;
    }

    .time {
      font-size: 12px;
      color: #77838f;
    }
  }

`

const TxRight = styled.div`
display: flex;
justify-content: space-between;

${mediaQueries.tabport} {
  flex-direction: column;
}

.from__to{
  font-size: 1rem;
  font-weight: 500;
  color: #1E2022;
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    color: #3498DB; 
  }

  .timeTaken {
    font-size: 12px;
      color: #77838f;
  }
}
`

const SingleBlock: FC = () => {
  return (
    <Tx>
      <TxLeft>
        <span className="blocktag"></span>
        <ul>
          <li className="blockNumber">15168936</li>
          <li className="time">2 mins ago</li>
        </ul>
      </TxLeft>

      <TxRight>
        <div className='from__to'>
          <span>
            Miner <a href="#">FlexPool.io</a>
          </span>
          <span>
           <a href='#'> 161 txns </a> <span className='timeTaken'>in 48 secs</span>
          </span>
        </div>
        <span>2.03546</span>
      </TxRight>
    </Tx>
  )
}

export default SingleBlock
