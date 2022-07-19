import React, { FC } from 'react'
import styled from 'styled-components'
import { bgColor } from '../utils/themes/colors'
import ethereumOne from '../Assets/ethereum-1.svg'
import globe from '../Assets/icon-8.svg'
import Notepad from '../Assets/icon-2-1.svg'
import Difficulty from '../Assets/icon-51.svg'

const CurrentDiv = styled.div`
  margin: -3rem 1rem 0;
  padding: 1rem;
  border-radius: 20px;
  background- color: ${bgColor.lightTheme};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  &::nth-child(2) {
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  }
`

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;

  .green{
    color: green;
    font-size: 12px;
  }

  .small{
    font-size: 12px;
  }

  .col-1-heading {
    font-size: 1rem;
    margin-bottom: -16px;
  }
  .col-1{
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  .col-2{
    display: flex;
    justify-content: space-between;
    align-items: center;

.col-2-inner{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
  }

`

const Image = styled.img`
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
`

const Current: FC = () => {
  return (
    <CurrentDiv>
      <InnerDiv>
        <div className='col-1'>
          <Image src={ethereumOne} alt="" />
          <div>
          <p className='col-1-heading'>ETHER PRICE</p>
          <p>
            $1,471.95 @ 0.0685 BTC <span className='green'>(+7.92%)</span>
          </p>
          </div>
        </div>
        <div className='col-1'>
          <Image src={globe} alt="globe"/>
          <div>
          <p className='col-1-heading'>MARKET CAP</p>
          <p>
          $176,240,834,841.00
          </p>
          </div>
        </div>
      </InnerDiv>
      <InnerDiv>
        <div className='col-2'>
          <div className='col-2-inner'>
            <Image src={Notepad} alt=""/>
            <div>
              <p className='col-1-heading'>TRANSACTIONS</p>
              <p>1,644.61 M <span className='small'>(13.4 TPS)</span></p>
            </div>
          </div>
          <div>
          <p className='col-1-heading'>MED GAS PRICE</p>
          <p>30 Gwei  <span className='small'>($0.91)</span></p>
          </div>
        </div>
        <div className='col-2'>
        <div className='col-2-inner'>
            <Image src={Difficulty} alt=""/>
            <div>
              <p className='col-1-heading'>DIFFICULTY</p>
              <p>1,644.61 M <span className='small'>(13.4 TPS)</span></p>
            </div>
          </div>
          <div>
          <p className='col-1-heading'>HASH RATE</p>
          <p>927,411.29 GH/s</p>
          </div>
        </div>
      </InnerDiv>
      <div></div>
    </CurrentDiv>
  )
}

export default Current
