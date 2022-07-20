import React from 'react'
import styled from 'styled-components'
import TransactionBox from './TransactionBox'


const TandB = styled.div`
padding: 1rem;
display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
background-color: #FCFCFD;

`
const TransactionAndBlockSection = () => {
  return (
    <TandB>
    <TransactionBox/>
    <TransactionBox/>
    </TandB>
  )
}

export default TransactionAndBlockSection