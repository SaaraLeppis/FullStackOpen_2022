import { useEffect, useState } from 'react';
import axios from 'axios'


const baseURL = "https://restcountries.com/v3.1/name/"

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name) {
      axios
        .get(baseURL + `${name}?fullText=true`)
        .then(response => {
          setCountry(response.data[0])

          // setIsLoading(false)
        })
        .catch((e) => {
          console.log(e)
          setCountry(null)
        })
    }
  }, [name]);

  return country
}

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}
