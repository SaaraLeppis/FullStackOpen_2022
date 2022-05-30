import React from 'react';
import CountryLines from './CountryLines';
import SingleCountry from './SingleCountry';

const CountriesList = ({ filterList, handleShow }) => {

  if (filterList.length === 1) {
    return (<SingleCountry list={filterList[0]} />)
  }
  else if (filterList.length <= 10) {
    return (<CountryLines filterList={filterList} handleShow={handleShow} />)
  }
  else if (filterList.length > 10) {
    return (
      <p>Too many matches! Specify another filter</p>
    )
  }
  else {
    return (<></>)
  }
}

export default CountriesList;