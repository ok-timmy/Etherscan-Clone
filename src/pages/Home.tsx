import React, { FC } from 'react'
import Current from '../components/Current'
import SearchSection from '../components/SearchSection'
import TransactionAndBlockSection from '../components/TransactionAndBlockSection'

const Home: FC = () => {
  return (
    <>
      <SearchSection />
        <Current />
        <TransactionAndBlockSection />
    </>
  )
}

export default Home
