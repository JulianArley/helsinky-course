import { useState } from 'react'
import AddPeopleForm from './AddPeopleForm'
import FilterPeople from './FilterPeople'
import ShowPeople from './ShowPeople'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setNewFilterBy] = useState('')

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