import React, { FC } from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/themes/mediaQueries'
import SingleBlock from './SingleBlock'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  width: 100%;

  ${mediaQueries.tabport} {
    margin: 0 1rem 0;
    max-width: calc(100vw - 2rem);
  }
}
`

const TableHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid black;

  h4{
    font-size: 1rem;
    font-weight: 600;
  }
`

const TableContent = styled.div`
  padding: 0 0.5rem;

  .boxContent {
    overflow-y: scroll;
    max-height: auto;

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
padding: 1rem;
border-top: 1px solid black;

.viewButton {
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  border: none;
  background: none;

  &:hover {
    color: #0784c3;
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
        </div>
      </TableContent>
      <TableButton>
        <button className="viewButton">
          View All Transactions{" "}
          <HiOutlineArrowNarrowRight
            fontSize={"1.8rem"}
            style={{ paddingLeft: "0.5rem" }}
          />
        </button>
      </TableButton>
    </Table>
  )
}

export default BlockBox
