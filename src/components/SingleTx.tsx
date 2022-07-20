import React, { FC } from 'react'
import styled from 'styled-components'


const Tx = styled.div`
display: grid;
grid-template-columns: 2fr 5fr;
grid-column-gap: 1rem;
`;

const TxLeft = styled.div`
display: flex;
justify-content: space-between;
`;

const TxRight = styled.div`
display: flex;
justify-content: space-between;
`

const SingleTx: FC = () => {
  return (
    <Tx>
      <TxLeft>
        <span className='blocktag'>Bk</span>
        <ul>
          <li className='blockNumber'>15168936</li>
          <li className='time'>20 seconds ago</li>
        </ul>
      </TxLeft>

      <TxRight>
        <div>
          <p>Miner <span>FlexPool.io</span></p>
          <p>161 txns <span>in 48 secs</span></p>
        </div>
        <span>2.03546</span>
      </TxRight>

    </Tx>
  )
}

export default SingleTx