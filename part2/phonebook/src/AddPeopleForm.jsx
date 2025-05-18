const AddPeopleForm = ({ 
    submitForm, 
    newName, 
    inputNameChange, 
    newNumber, 
    inputNumberChange }) => {

  return (
    <form onSubmit={submitForm}>
        <div>
            name: 
            <input value={newName} onChange={inputNameChange} />
        </div>
        <div>
            number: 
            <input value={newNumber} onChange={inputNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
  )
}

export default AddPeopleForm