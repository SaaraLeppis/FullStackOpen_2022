import { useEffect, useState } from 'react';
import axios from 'axios'
import CountriesList from './components/CountriesList';
import Loader from './components/Loader';


const baseURL = "https://restcountries.com/v3.1/all"

function App() {
  const [countryData, setCountryData] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [newList, setNewList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseURL)
      .then(response => {
        setCountryData(response.data)
        setIsLoading(false)
      })
  }, []);

  useEffect(() => {
    let newData = countryData.filter(country =>
      country.name.common.toLowerCase().includes(countryFilter.toLowerCase()) || countryFilter === '');
    setNewList(newData);
  }, [countryFilter]);

  const handleFilter = (event) => {
    setCountryFilter(event.target.value);
  }

  if (isLoading) {
    return (<Loader />)
  }
  else if (!isLoading) {
    return (
      <div className="App">
        find countries:
        <input type="text" onChange={handleFilter} ></input>
        <CountriesList filterList={newList} handleShow={handleFilter} setNewList={setNewList} />
      </div >
    )
  }
};
export default App;
