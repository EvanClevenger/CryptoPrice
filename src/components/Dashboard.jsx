import "../dashboardStyles.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Crypto Dashboard</h1>
      </header>

      <div className="coin-list">
        <input
          className="searchBar"
          placeholder="Search our supported coins here"
          type="text"></input>
      </div>

      <div className="graph"></div>
    </div>
  );
};

export default Dashboard;
