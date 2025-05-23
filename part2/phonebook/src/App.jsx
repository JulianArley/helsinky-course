import { useEffect, useState } from 'react'
import AddPeopleForm from './AddPeopleForm'
import FilterPeople from './FilterPeople'
import Notification from './Notification'
import PeopleService from './services/people'
import ShowPeople from './ShowPeople'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setNewFilterBy] = useState('')
  const [message, setNewMessage] = useState(null)
  const [className, setClassName] = useState('')

  useEffect(() => {
    PeopleService.getAll()
      .then(response => setPersons(response));
  }, [])
  console.log('render', persons.length, 'people')

  const submitForm = (event) => {
    event.preventDefault()

    const newPerson = { 
      id: persons.length + 1 + "",
      name: newName,
      number: newNumber
    }

    PeopleService.createPerson(newPerson)
      .then(response => {
        setPersons(persons.concat(response))
        setClassName('notification created')
              setNewMessage(`Number updated for ${newName}, new value ${newNumber}`)
      })
      .catch(error => {
        if(error.response.data.message === 'Person already exists' 
            && error.response.status === 409 ){
          const updateNumber = window.confirm(`${newName} already exists, repalce old number?`)
          
          if(updateNumber) {
            PeopleService
            .updatePersonNumber(
              newName, 
              {name: newName, number: newNumber}
            )
            .then(response => {
              setPersons(persons.map(person => person.id !== response.id ? person : response))
              setClassName('notification created')
              setNewMessage(`Number updated for ${newName}, new value ${newNumber}`)
              setTimeout(() => {
                setNewMessage(null)
              }, 5000)
              }
            )
            .catch(error => {
              setClassName('notification error')
              setNewMessage(error.response.data.error)
              setTimeout(() => {
                setNewMessage(null)
              }, 5000)
            })
          }
        } else {
          setClassName('notification error')
          setNewMessage(error.response.data.error)
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        }

      })
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

  const deleteHandler = person => {
    const confirmation = window.confirm(`Proceed with deleting of ${person.name}`)
    if(confirmation) PeopleService.deletePerson(person.id)
      .then(response => setPersons(
        persons.filter(pers => pers.id !== person.id)
      ))
    
  }

  const peopleToShow = persons.filter(person => person.name.includes(filterBy) === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} className={className} />
      
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
      <ShowPeople people={peopleToShow} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App