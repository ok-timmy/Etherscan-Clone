import React, { FC } from 'react'
import styled from 'styled-components'
import SingleTx from './SingleTx';

const Table = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
border: 1px solid #A8A8A8;

`;

const TableHeader = styled.div`
flex: 1;
padding: 0.5rem 1rem;
border-bottom: 1px solid black;
`

const TableContent = styled.div`
flex: 12;
overflow-y: scroll;
height: auto;
padding: 0 0.5rem;
`;

const TableButton = styled.div`
padding: 0.5rem;
`

const TransactionBox : FC = () => {
  return (
    <Table>
      <TableHeader><h3>Latest Blocks</h3></TableHeader>
      <TableContent>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
        <SingleTx/>
      </TableContent>
      <TableButton><button>View All Transactions</button></TableButton>
    </Table>
  )
}

export default TransactionBox