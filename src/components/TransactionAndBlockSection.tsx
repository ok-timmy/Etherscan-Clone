import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../utils/themes/mediaQueries'
import BlockBox from './BlockBox'
import TransactionBox from './TransactionBox'

const TandB = styled.div`
  // margin-top: -1rem;
  margin: -1rem 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  background-color: #fcfcfd;
  width: auto;

  ${mediaQueries.tabport} {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    max-width: 80%;
    margin: 0 3rem 2rem;
  }

  ${mediaQueries.tabland} {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    max-width: 95%;
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
