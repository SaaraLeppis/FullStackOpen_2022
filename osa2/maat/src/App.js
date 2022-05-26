import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const baseURL = "https://restcountries.com/v3.1/all"
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    console.log('effect');
    axios
      .get(baseURL)
      .then(response => {
        console.log('resp', response);
        setCountryData(response);
      })
  }, [])

  console.log(countryData);
  return (
    <div className="App">

    </div>
  );
}

export default App;
