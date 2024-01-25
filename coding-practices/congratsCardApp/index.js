const element = (
  <div className="main_container">
    <div class="card">
      <h1 class="card_heading">Congratulations</h1>
      <div class="card_container">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <p className="card_name">Kiran V</p>
        <p className="card_address">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
