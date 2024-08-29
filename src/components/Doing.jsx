import '../styles.css';

function Doing({ doingList }) {
  return (
    <div className="task-panel-content">
      <div className="task-panel-content-title">Doing</div>

      <div className="task-panel-content-list">
        {doingList.map((doingMsg) => (
          <ul className="task-item" draggable="true">{doingMsg}</ul>
        ))}
      </div>
    </div>
  );
}

export default Doing;