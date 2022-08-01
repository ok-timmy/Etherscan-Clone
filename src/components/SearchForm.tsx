import React, { FC } from 'react'
import { Search } from 'react-bootstrap-icons'
import { Form } from '../utils/form/form'


interface Props {
    maxWidth?: string, 
    fontSize?: string,
    height?: string,
    margin?: string
}

const SearchForm: FC<Props> = ({maxWidth, fontSize, height, margin}) => {
  return (
    <Form maxWidth={maxWidth} fontSize={fontSize} height={height} margin={margin}>
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
  )
}

export default SearchForm