import Part from "./Part";

const Content = ({part}) => {
  return (
    <div>
      <Part part={part[0].name} exercises={part[0].exercises} />
      <Part part={part[1].name} exercises={part[1].exercises} />
      <Part part={part[2].name} exercises={part[2].exercises} />
    </div>
  )
}

export default Content