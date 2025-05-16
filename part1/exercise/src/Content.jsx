import Part from "./Part"

const Content = ({part, exercises}) => {
  return (
    <div>
        <Part part={part} exercises={exercises} />
    </div>
  )
}

export default Content