import './App.css';
import Sidebar from './components/navigation/Sidebar';
import Topbar from './components/navigation/Topbar';
import Home from './components/view/home/Home';

function App() {
  return (
    <div className="dashboard_container">
      <div className="side_bar">
        <Sidebar />
      </div>
      <div className="main_view">
          <Topbar />
          <div className="main_view-inner">
            <Home />
          </div>
      </div>
    </div>
  );
}

export default App;
