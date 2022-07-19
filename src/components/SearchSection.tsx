import React, { FC } from 'react'
import styled from 'styled-components'
import { FontColors } from '../utils/themes/colors'
import fairspin from '../Assets/fairspin_20.webp'
import { Search } from 'react-bootstrap-icons'

const SearchSection: FC = () => {
  const CurrentSection = styled.div`
    width: 100%;
    height: 40vh;
    background: #22335c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem;

    .formHeader {
      color: white;
      margin-bottom: 0.8rem;
    }
  `

  const Form = styled.form`
    display: flex;
    height: 2.8rem;
    max-width: 50vw;
    border-radius: 40px;

    .select {
      padding: 0 1rem;
      color: black;
      border-radius: 5px 0 0 5px;
      flex: 3;
    }

    .searchInput {
      width: 100%;
      padding: 0 1rem;
      flex: 15;
    }

    .searchButton {
      color: ${FontColors.darkTheme};
      background-color: #3498db;
      border: none;
      padding: 1rem 1rem;
      border-radius: 0 5px 5px 0;
      flex: 1;
      font-size: 1rem;
    }
  `

  const Paragraph = styled.p`
    color: #bfc4d0;
    font-size: 14px;
    margin-top: 5px;

    img {
      margin-bottom: -5px;
    }

    .link {
      color: #3498DB;
      text-decoration: none;
      &:hover {
        color: #1f6da4;
      }
    }
  `

  return (
    <CurrentSection>
      <h2 className="formHeader"> The Ethereum Blockchain Explorer</h2>
      <Form>
        <select className="select">
          <option>All Filters</option>
          <option>Addresses</option>
          <option>Name Tag</option>
          <option>Token</option>
          <option>Label</option>
          <option>Website</option>
        </select>
        <input
          type={'text'}
          placeholder={'Search by Address/ Txn Hash / Block / Token / Ens'}
          className="searchInput"
        />
        <button className="searchButton" type="submit">
          <Search />
        </button>
      </Form>
      <Paragraph>
        Sponsored: <img src={fairspin} alt="fairspinImg" /> Get your first free
        200 $TFS.{' '}
        <a href="https://" className="link">
          Register, play, stake and get profit!
        </a>
      </Paragraph>
    </CurrentSection>
  )
}

export default SearchSection
