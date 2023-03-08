import './App.css';
import Sidebar from './Components/navigation/Sidebar';
import Topbar from './Components/navigation/Topbar';
import Home from './Components/view/home/main_view/Home';
 
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
