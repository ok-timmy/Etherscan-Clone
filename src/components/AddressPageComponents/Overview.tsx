import React, { FC } from 'react'
import styled from 'styled-components'

const OverviewDiv = styled.div`
width: 100%;
height: auto;
background-color: white;
box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
display: block;
border-radius: 10px;
`

const OverViewHeader = styled.div`
border-bottom: 1px solid black;
padding: 0.5rem;
font-weight: bold;
`;

const OverviewContent = styled.div`
padding: 0 0.5rem;
height: auto;

&:first-child{
  border-bottom: 1px solid black;
}
`;

const OverviewDetails = styled.div`
display: flex;
// border-bottom: 1px solid black;
padding: 1rem 0.5rem;
font-size: 0.9rem;
font-weight: 600;

.name {
  flex: 4;
}

.balance {
  flex: 6;
}
`

const Overview: FC = () => {
  return (
    <OverviewDiv>
      <OverViewHeader>Overview</OverViewHeader>
      <OverviewContent>
        <OverviewDetails>
          <span className='name'>Balance:</span>
          <span className='balance'>42.749768627950947782 Ether</span>
        </OverviewDetails>
        <OverviewDetails>
          <span className='name'>Ether Value:</span>
          <span className='balance'>$73,477.45 (@ $1,718.78/ETH)</span>
        </OverviewDetails>
        <OverviewDetails>
          <span className='name'>Token:</span>
          <span className='balance'>42.749768627950947782 Ether</span>
        </OverviewDetails>
      </OverviewContent>
    </OverviewDiv>
  )
}

export default Overview