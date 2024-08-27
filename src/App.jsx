import './styles.css';
import TitleBar from './components/TitleBar';
import Todo from './components/Todo';
import Doing from './components/Doing';
import Done from './components/Done';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="task-panel-container">
        <Todo />
        <Doing />
        <Done />
      </div>
    </div>
  );
}

export default App;
