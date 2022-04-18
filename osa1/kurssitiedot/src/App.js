import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 10;
  const part3 = 'Using props to pass data';
  const exercises3 = 10;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} excersice={exercises1} />
      <Content part={part2} excersice={exercises2} />
      <Content part={part3} excersice={exercises3} />
      <Total sumOfExcercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
