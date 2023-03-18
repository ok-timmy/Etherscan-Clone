import React, { FC, useEffect } from 'react'
import Current from '../components/HomePageComponents/Current'
import SearchSection from '../components/HomePageComponents/SearchSection'
import TransactionAndBlockSection from '../components/HomePageComponents/TransactionAndBlockSection'

const Home: FC = () => {
  const result = async (urlData: string) => {
    await fetch(urlData).then(async (balance) => {
      const data = await balance.json();
      console.log(JSON.parse(data.result));
    })
  }

  useEffect(() => {
    // result(
    //   'https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=VV8TC9NDV3KNDF85QXNW1S58AR6WQHQ5ZW',
    // );

    result("https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken")
  }, [])

  return (
    <>
      <SearchSection />
      <Current />
      <TransactionAndBlockSection />
    </>
  )
}

export default Home
