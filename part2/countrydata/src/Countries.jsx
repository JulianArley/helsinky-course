import { useState } from "react";
import CountryData from "./CountryData";

const Countries = ({countries}) => {

  const [show, setShow] = useState(null)

  const showHandler = country => {
    setShow(country)
  }

  if (countries === null || countries.length === 0) return
  if (countries.length > 9) 
    return (<> <p>Too many matches, specify your filter</p> </>)

  if (countries.length > 1) 
    return (
      <>
        <ul>
          {countries.map(country => 
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => showHandler(country)}>Show</button>
            </li>
          )}
        </ul>
        <CountryData countryData={show} weather={false} />
      </>
      
    )

  if (countries.length === 1) return(
    <>
      <CountryData countryData={countries[0]} weather={true} />
    </>
  )
}

export default Countries