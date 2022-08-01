import React, { FC } from 'react'
import styled from 'styled-components'
import { FontColors } from '../utils/themes/colors'
import fairspin from '../Assets/fairspin_20.webp'
import { Search } from 'react-bootstrap-icons'

const SearchSection: FC = () => {
  const CurrentSection = styled.div`
    height: 47vh;
    background: #22335c;
    padding: 1rem 1rem;
    z-index: 500;

    .formHeader {
      color: white;
      margin: 2rem 0 0;
      font-size: 20px;
      font-weight: bold;
    }
  `

  const Form = styled.form`
    display: flex;
    height: 2.8rem;
    max-width: 55vw;
    border-radius: 40px;
    margin: 1rem 0 0.5rem;

    .select {
      padding: 0 1rem;
      color: black;
      border-radius: 5px 0 0 5px;
      flex: 3;
      &:focus {
        outline: none;
      }
    }

    .searchInput {
      width: 100%;
      padding: 0 1rem;
      flex: 15;

      &:focus {
        outline: none;
        border: #3498db 1px solid;
      }
    }

    .searchButton {
      color: ${FontColors.darkTheme};
      background-color: #3498db;
      border: none;
      padding: 0 1rem;
      border-radius: 0 5px 5px 0;
      font-size: 1rem;
      max-width: 4rem;
    }
  `

  const Paragraph = styled.p`
    color: #bfc4d0;
    font-size: 1rem;
    font-weight: bold;
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
      <p className="formHeader"> The Ethereum Blockchain Explorer</p>
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
