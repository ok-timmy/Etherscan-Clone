import React, { FC } from 'react'
import Current from '../components/Current'
import SearchSection from '../components/SearchSection'
import TransactionAndBlockSection from '../components/TransactionAndBlockSection'

const Home: FC = () => {
  return (
    <>
      <SearchSection />
      <div
        style={{
          backgroundColor: '#FCFCFD',
          position: 'relative',
          margin: 'auto 1rem 2rem',
        }}
      >
        <Current />
        <TransactionAndBlockSection />
      </div>
    </>
  )
}

export default Home
