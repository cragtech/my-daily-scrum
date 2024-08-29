import '../styles.css';

function Done({ doneList }) {
  return (
    <div className="task-panel-content">
      <div className="task-panel-content-title">Done</div>

      <div className="task-panel-content-list">
        {doneList.map((doneMsg) => (
          <ul className="task-item" draggable="true">{doneMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Done;