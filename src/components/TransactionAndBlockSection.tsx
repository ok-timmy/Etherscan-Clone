import React from 'react'
import styled from 'styled-components'
import BlockBox from './BlockBox'
import TransactionBox from './TransactionBox'

const TandB = styled.div`
margin-top: -1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  background-color: #fcfcfd;
`
const TransactionAndBlockSection = () => {
  return (
    <TandB>
      <BlockBox />
      <TransactionBox />
      {/* <TransactionBox/> */}
    </TandB>
  )
}

export default TransactionAndBlockSection
