import React, { FC } from 'react'
import styled from 'styled-components'
import fairspin from '../../Assets/fairspin_20.webp'
import { mediaQueries } from '../../utils/themes/mediaQueries'
import SearchForm from './SearchForm'

const SearchSection: FC = () => {
  const CurrentSection = styled.div`
    height: 45vh;
    background: #18213C;
    padding: 1rem 1rem;
    z-index: 500;

    ${mediaQueries.tabport} {
      height: calc(height+10rem);
    }

    ${mediaQueries.tabland} {
      height: 17.5rem;
    }

    .formHeader {
      color: white;
      margin: 2rem 0 0;
      font-size: 20px;
      font-weight: bold;
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
     <SearchForm />
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
