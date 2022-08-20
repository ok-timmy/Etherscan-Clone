import React, { FC } from 'react'
import { Eye, Journal } from 'react-bootstrap-icons'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/themes/mediaQueries'

const TableData = styled.tr`
width: auto;
text-align: left;
height: 3rem;
border-bottom: 1px solid grey;


&:last-child {
  border-bottom: none;
}

td{
  padding: 0 1rem;
}

.eye {
  border: none;
  background-color: #D3D5DC;
  font-size: 0.75rem;
  width: 1.25rem !important;
  height: 1.25rem !important;
  border-radius: 5px;
  justify-item: center;
}

.link{
  text-decoration: none;
  font-size: 0.9rem;
}

.event {
  background-color: #E1EDF7;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

.out {
  font-size: 0.9rem;
  background-color: #f0e5c9;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 900;
  border-radius: 6px;
  color: #B47D41;
}
`

const SingleTransaction:FC = () => {
  return (
    <TableData>
      <td style={{paddingLeft: "0.5rem"}}><button className='eye'><Eye/></button></td>
      <td><a href='#' className='link'>0xfe7887486356be18bd1f...</a></td>
      <td ><span className='event'>Transfer</span></td>
      <td><a href='#' className='link'>1234567</a></td>
      <td>1 day 4 hrs ago</td>
      <td>0xc025c461ae431ac3d38..</td>
      <td> <span className='out'>OUT</span></td>
      <td><Journal fontSize={"0.75rem"}/> <a href='#' className='link'>0xd256487ba2ded536</a></td>
      <td>11.5 Ether</td>
      <td style={{paddingRight: "1rem", fontSize: "0.8rem"}}>0.00075202</td>
    </TableData>
  )
}

export default SingleTransaction