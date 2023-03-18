import React, { FC, Fragment, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Mainform } from "../../utils/form/mainform";
import { Headerform } from "../../utils/form/headerform";
import { useLocation } from "react-router-dom";

interface Props {
  maxWidth?: string;
  fontSize?: string;
  height?: string;
  margin?: string;
}

const SearchForm: FC<Props> = ({ maxWidth, fontSize, height, margin }) => {
  const location = useLocation();

  const [address, setAddress] = useState("");
  console.log(address);

  return (
    <Fragment>
      {location.pathname === "/" ? (
        <Mainform
          maxWidth={maxWidth}
          fontSize={fontSize}
          height={height}
          margin={margin}
        >
          <select className="select">
            <option>All Filters</option>
            <option>Addresses</option>
            <option>Name Tag</option>
            <option>Token</option>
            <option>Label</option>
            <option>Website</option>
          </select>
          <input
            type={"text"}
            placeholder={"Search by Address/ Txn Hash / Block / Token / Ens"}
            className="searchInput"
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="searchButton" type="submit">
            <Search />
          </button>
        </Mainform>
      ) : (
        <Headerform
          maxWidth={maxWidth}
          fontSize={fontSize}
          height={height}
          margin={margin}
        >
          <span className="searchIcon"><Search color="black"/></span>
          <input
            type={"text"}
            placeholder={"Search by Address/ Txn Hash / Block / Token / Ens"}
            className="searchInput"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Headerform>
      )}
    </Fragment>
  );
};

export default SearchForm;
