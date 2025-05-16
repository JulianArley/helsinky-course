const Total = ({exercises}) => {
  let sum = 0

  exercises.forEach(number => {
    sum += number
  });

  return (
    <p>Number of exercises {sum}</p>
  )
}

export default Total