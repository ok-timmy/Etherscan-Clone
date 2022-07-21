import React, { FC } from 'react'
import styled from 'styled-components'

const Tx = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-column-gap: 1rem;
  border-bottom: 0.2px solid #77838f;
`

const TxLeft = styled.div`
  display: flex;

  .blocktag {
    background-color: #f1f2f4;
    padding: 0.8rem 1rem;
    height: auto;
    border-radius: 5px;
    margin-right: 0.5rem;
  }

  ul {
    list-style: none;

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

p{
  font-size: 1rem;
  font-weight: 500;
  color: #1E2022;

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
        <span className="blocktag">Bk</span>
        <ul>
          <li className="blockNumber">15168936</li>
          <li className="time">2 mins ago</li>
        </ul>
      </TxLeft>

      <TxRight>
        <div>
          <p>
            Miner <a href="#">FlexPool.io</a>
          </p>
          <p>
           <a href='#'> 161 txns </a> <span className='timeTaken'>in 48 secs</span>
          </p>
        </div>
        <span>2.03546</span>
      </TxRight>
    </Tx>
  )
}

export default SingleBlock
