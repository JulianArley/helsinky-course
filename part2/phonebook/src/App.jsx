import axios from 'axios'
import { useEffect, useState } from 'react'
import AddPeopleForm from './AddPeopleForm'
import FilterPeople from './FilterPeople'
import ShowPeople from './ShowPeople'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setNewFilterBy] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise got')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'people')

  const submitForm = (event) => {
    event.preventDefault()

    const newPerson = { 
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    const checkDuplicate = persons.find((person) => person.name === newName)
    if(checkDuplicate) return alert(`${newName} already exists`)

    setPersons(persons.concat(newPerson))
    setNewName('');
    
  }

  const inputNameChange = (event) => {
    setNewName(event.target.value)  
  }

  const inputNumberChange = (event) => {
    setNewNumber(event.target.value)  
  }

  const inputFilterChange = (event) => {
    setNewFilterBy(event.target.value)  
  }

  const peopleToShow = persons.filter(person => person.name.includes(filterBy) === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPeople filterBy={filterBy} inputFilterChange={inputFilterChange} />

      <h1> Add new </h1>

      <AddPeopleForm 
        submitForm={submitForm}
        newName={newName}
        inputNameChange={inputNameChange}
        newNumber={newNumber}
        inputNumberChange={inputNumberChange}
      />

      <h2>Numbers</h2>
      <ShowPeople people={peopleToShow} />
    </div>
  )
}

export default App