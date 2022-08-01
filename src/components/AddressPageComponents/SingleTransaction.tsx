import React, { FC } from 'react'
import { Eye, Journal } from 'react-bootstrap-icons'
import styled from 'styled-components'

const TableData = styled.tr`
width: 100%;
text-align: left;
height: 2.5rem;
`

const SingleTransaction:FC = () => {
  return (
    <TableData>
      <td><Eye/></td>
      <td>0xfe7887486356be18bd1f...</td>
      <td>Transfer</td>
      <td>1234567</td>
      <td>1 day 4 hours ago</td>
      <td>0xc025c461ae431ac3d38..</td>
      <td>OUT</td>
      <td><Journal/> 0xd256487ba2ded536</td>
      <td>11.5 Ether</td>
      <td>0.00075202</td>
    </TableData>
  )
}

export default SingleTransaction