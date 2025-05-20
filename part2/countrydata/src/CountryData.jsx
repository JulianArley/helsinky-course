import Weather from "./Weather"

const CountryData = ({countryData, weather}) => {
  if (countryData === null) return

  return (
    <>
      <h1>{countryData.name.common}</h1>
      <p>{countryData.capital}</p>
      <p>{countryData.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.entries(countryData.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={countryData.flags.png} alt="" />
      <Weather country={countryData} weather={weather} />
    </>
  )
}

export default CountryData