import '../styles.css';

function Todo({ todoList }) {
  return (
    <div className="task-panel-content">
      <div className="task-panel-content-title">To Do</div>
      <div className="task-panel-content-list">
        {todoList.map((todoMsg) => (
          <ul>{todoMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Todo;