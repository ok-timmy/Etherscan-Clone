import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/themes/mediaQueries'
import BlockBox from './BlockBox'
import TransactionBox from './TransactionBox'

const TandB = styled.div`
  margin: -1rem 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  background-color: #fcfcfd;
  width: auto;

  ${mediaQueries.tabport} {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 0;
    max-width: 100vw;
    // padding: 0 1rem 2rem;
    margin: -1rem 0 2rem;
  }
  
  ${mediaQueries.tabland} {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    max-width: 95%;
    grid-column-gap: 0;
    margin: 0 2rem 2rem;
  }
`
const TransactionAndBlockSection = () => {
  return (
    <TandB>
      <BlockBox />
      <TransactionBox />
    </TandB>
  )
}

export default TransactionAndBlockSection
