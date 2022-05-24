import './index.css';
import Course from './components/Course';

const App = () => {
  const courses = [{
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux is awesome',
        exercises: 1,
        id: 4
      },
      {
        name: 'Magic can happen',
        exercises: 4,
        id: 5
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }]

  const createCourse = courses.map(course => {
    return <Course key={course.id} course={course} />
  })

  return (
    <div className='course-wrapper'>
      {createCourse}
    </div>
  )
}

export default App;
