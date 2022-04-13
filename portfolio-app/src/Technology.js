
const techList = ["Java", "SQL", "JavaScript", "HTML", "CSS", "Bootstrap", "React"];

const renderList = techList.map((item, index) =>
        <li key={index}>{item}</li>
    );

function Technology() {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Technology Summary</h2>
        <ul className="list-unstyled">
          {renderList}
        </ul>
      </div>
    </div>
  );
}

export default Technology;
