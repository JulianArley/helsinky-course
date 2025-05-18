const Total = ({part}) => {

  const total = part.reduce((accumulator, currentVal) => {
    return accumulator + currentVal.exercises
  }, 0)

  return (
    <p><b>Number of exercises {total} </b></p>
  )
}

export default Total