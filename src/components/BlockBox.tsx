import React, { FC } from 'react'
import styled from 'styled-components'
import SingleBlock from './SingleBlock'

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
}
`

const TableHeader = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid black;
`

const TableContent = styled.div`
  padding: 0 0.5rem;

  .boxContent {
    overflow-y: scroll;
    max-height: 25rem;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      margin: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 16px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #5b5b5b;
      display: block;
    }
  }
`

const TableButton = styled.div`
  padding: 0.5rem;
  border-top: 1px solid black;

  .viewButton {
    margin: auto;
    padding: 0.5rem;
    font-size: 12px;
    width: 100%;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: rgba(234, 244, 251, 0.8);
    color: #3498db;

    &:hover {
      background-color: #3498db;
      color: white;
    }
  }
`

const BlockBox: FC = () => {
  return (
    <Table>
      <TableHeader>
        <h4>Latest Blocks</h4>
      </TableHeader>
      <TableContent>
        <div className="boxContent">
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
        </div>
      </TableContent>
      <TableButton>
        <button className="viewButton">View All Transactions</button>
      </TableButton>
    </Table>
  )
}

export default BlockBox
