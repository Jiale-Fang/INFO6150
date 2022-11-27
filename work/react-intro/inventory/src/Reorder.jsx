function Reorder({ onReorder }) {
  return (
    <div className="reorder-container">
      <button className="reorder" onClick={() => { onReorder(5) }}>reorder</button>
    </div>
  );
}

export default Reorder;