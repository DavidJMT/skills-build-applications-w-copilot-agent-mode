
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Octofit Tracker</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/activities">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leaderboard">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/teams">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/users">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workouts">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2>Welcome to Octofit Tracker!</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
