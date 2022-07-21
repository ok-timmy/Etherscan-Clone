import React, { FC } from 'react'
import styled from 'styled-components'

const Tx = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1rem;
  border-bottom: 0.2px solid #77838f;
`

const TxLeft = styled.div`
  display: flex;

  .blocktag {
    background-color: #f1f2f4;
    padding: 0.8rem 1rem;
    height: auto;
    border-radius: 50%;
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

const SingleTx: FC = () => {
  return (
    <Tx>
      <TxLeft>

        <span className="blocktag">Tx</span>
        <ul>
          <li className="blockNumber">0x1c3d4169f1...</li>
          <li className="time">20 seconds ago</li>
        </ul>
      </TxLeft>

      <TxRight>
        <div>
          <p>
            From <a href="#">0x1c3d4169f1c50ae.......</a>
          </p>
          <p>
           To <a href='#'>0x1c3d4169f1c50ae...</a>
          </p>
        </div>
        <span>2.03546</span>
      </TxRight>
    </Tx>
  )
}

export default SingleTx
