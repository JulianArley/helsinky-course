const FilterPeople = ({ filterBy, inputFilterChange }) => {
    return (
      <p>
        Filter data with: 
        <input value={filterBy} onChange={inputFilterChange} />
      </p>
    )
}

export default FilterPeople