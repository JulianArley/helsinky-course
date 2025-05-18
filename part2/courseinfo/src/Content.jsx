import Part from "./Part";

const Content = ({part}) => {
  return (
    <div>
      {part.map(part_ => 
        <Part key={part_.id} part={part_.name} exercises={part_.exercises} />
      )}
    </div>
  )
}

export default Content