import React, { FC, useState } from 'react'
import {
  Funnel,
  InfoCircle,
  SortDown,
  ThreeDotsVertical,
} from 'react-bootstrap-icons'
import styled from 'styled-components'
import SingleTransaction from './SingleTransaction'

const TransactionBlockDiv = styled.div`
  padding: 0 1rem;
  width: 100%;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
`

const TransactionBlockHeader = styled.div`
  border-bottom: 1px solid black;
  padding: 0 1rem;
  font-weight: bold;
  border-bottom: 1px solid black;

  .tx__list {
    list-style-type: none;
    display: inline-flex;
    padding: 0;

    li {
      padding: 1rem 1rem 1rem 0.25rem;
      margin: 0 0.25rem;
      cursor: pointer;

      :hover {
        color: #3498db;
      }
    }
    .active {
      border-bottom: 2px solid #3498db;
      color: #3498db;
    }
  }
`

const PTag = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 1rem 2rem;
font-weight: 600;

.all__tx {
  text-decoration: none;
}
.three__dots {
  width: 1.5rem;
  height: 1.7rem;
  background color: #D5DAE2;
  border-radius: 5px;
}
`

const TransactionTable = styled.table`
  width: 100%;
  .thead {
    background-color: #eaedf4;
    height: 2.5rem;
    .table__head__row {
      .empty__header {
       padding: 0 1.5rem;
      }
      th {
        text-align: left;


        .funnel {
          border: none;
          background-color: #D3D5DC;
          padding: 0.1rem 0.3rem;
          border-radius: 5px;
          font-size: 12px;
          margin-left: 8px;
        }
      }
    }
  }
`

const TransactionBlock: FC = () => {
  const headerOptions = [
    'Transactions',
    'Internal Txns',
    'Erc20 Token Txns',
    'Erc721 Token Txns',
    'Erc1155 Token Txns',
    'Analytics',
    'Comments',
  ]

  const [active, setActive] = useState('Transactions')

  return (
    <TransactionBlockDiv>
      <TransactionBlockHeader>
        <div className="tx__list">
          {headerOptions.map((x) => {
            return (
              <li
                key={x}
                onClick={() => setActive(x)}
                className={active === x ? 'active' : ''}
              >
                {x}
              </li>
            )
          })}
        </div>
      </TransactionBlockHeader>
      <PTag>
        <span>
          <SortDown /> Latest 25 from a total of{' '}
          <a href="#" className="all__tx">
            119
          </a>{' '}
          transactions
        </span>
        <button className="three__dots">
          <ThreeDotsVertical aria-haspopup={'dialog'} />
        </button>
      </PTag>

      <TransactionTable>
        <thead className="thead">
          <tr className="table__head__row">
            <th className="empty__header"></th>
            <th>Txn Hash</th>
            <th>
              Method <InfoCircle />{' '}
              <button className="funnel">
                <Funnel />
              </button>
            </th>
            <th>
              {' '}
              Block{' '}
              <button className="funnel">
                <Funnel />
              </button>
            </th>
            <th>
              {' '}
              Age{' '}
              <button className="funnel">
                <Funnel />
              </button>
            </th>
            <th>
              From{' '}
              <button className="funnel">
                <Funnel />
              </button>
            </th>
            <th className="empty__header"></th>
            <th>
              To{' '}
              <button className="funnel">
                <Funnel />
              </button>
            </th>
            <th>Value</th>
            <th>Txn Fee</th>
          </tr>
        </thead>
        <tbody>
          <SingleTransaction />
        </tbody>
      </TransactionTable>
    </TransactionBlockDiv>
  )
}

export default TransactionBlock
