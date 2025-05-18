const ShowPeople = ({ people }) => {
  return (
    <ul>
        {people.map(person => 
            <li key={person.id}>{person.name} : {person.number}</li>
        )}
    </ul>
  )
}

export default ShowPeople