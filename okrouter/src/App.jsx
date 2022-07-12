import Comp from './components/Comp.jsx';

function App(props) {
  const list = ['hello1', 'hello2', 'hello3', 'hello4', 'hello5'];
  return (
    <div className="App">
      <h1>Main 1</h1>
      {list.forEach((item, index) => (
        <Comp value={item} key={index} />
      ))}
    </div>
  );
}

export default App;
