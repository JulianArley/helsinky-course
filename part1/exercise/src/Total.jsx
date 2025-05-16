const Total = ({part}) => {
  let sum = 0

  part.forEach(element => {
    sum += element.exercises
  });

  return (
    <p>Number of exercises {sum}</p>
  )
}

export default Total