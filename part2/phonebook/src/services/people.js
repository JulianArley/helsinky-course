import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const data = axios.get(baseUrl)
    return data.then(response => response.data)
}

const createPerson = newPerson => {
    const data = axios.post(baseUrl, newPerson)
    return data.then(response => response.data)
}

const deletePerson = (id) => {
  const data = axios.delete(`${baseUrl}/${id}`)
  return data.then(response => response.data)
}

const updatePersonNumer = (id, number) => {
  const data = axios.put(`${baseUrl}/${id}`, number)
  return data.then(response => response.data)
}

export default { getAll, createPerson, deletePerson, updatePersonNumer }