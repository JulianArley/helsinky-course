import axios from 'axios'
import { useEffect, useState } from 'react'
import Countries from './Countries'


function App() {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState(null)

  const searchChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => setCountries(response.data))
  },[])
  
  const countriesToShow = search
    ? countries.filter(country => country.name.common.includes(search))
    : countries

  return (
    <>
      <p>Find countries <input value={search} onChange={searchChange} /> </p>
      <Countries countries={countriesToShow} />
    </>
  )
}

export default App
