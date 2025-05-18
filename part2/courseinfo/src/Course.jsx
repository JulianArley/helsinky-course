import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({courses}) => {
  return (
    <div>
      {courses.map(course => 
        <div key={course.id}>
          <Header course={course.name} />
          <Content part={course.parts} />
          <Total part={course.parts} />
        </div>
      )}
      
    </div>
  )
}

export default Course