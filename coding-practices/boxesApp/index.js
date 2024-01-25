const Box = (props) => {
  const { boxName, className } = props;

  return (
    <div class={`box-container ${className}`}>
      <p className="box-title">{boxName}</p>
    </div>
  );
};

const element = (
  <div className="boxes-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-list-container">
      <Box boxName="Small" className="small-box" />
      <Box boxName="Medium" className="medium-box" />
      <Box boxName="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
