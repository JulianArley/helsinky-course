const ShowPeople = ({ people, deleteHandler }) => {
  return (
    <ul>
        {people.map(person => 
            <li key={person.id}>
              {person.name} : {person.number}
              <button onClick={() => {deleteHandler(person)}}>Delete</button>
            </li>
        )}
    </ul>
  )
}

export default ShowPeople