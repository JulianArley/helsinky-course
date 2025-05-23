import axios from 'axios'
const baseUrl = '/api/persons'

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

const updatePersonNumber = (name, number) => {
  const data = axios.put(`${baseUrl}/${name}`, number)
  return data.then(response => response.data)
}

export default { getAll, createPerson, deletePerson, updatePersonNumber }