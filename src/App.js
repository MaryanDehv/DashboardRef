import './App.css';
import Sidebar from './Components/navigation/sidebar/Sidebar';
import Topbar from './Components/navigation/Topbar';
import { useState } from 'react';

function App({component: Component}) {
  const [closeState , setCloseState] = useState(true)

  const toggleSideBar = () => {
    setCloseState(!closeState);
  }

  return (
      <div className="dashboard_container">
        <div className={`side_bar ${closeState ? 'close-mobile' : 'open-mobile'}`}>
          <Sidebar toggle={toggleSideBar}/>
        </div>
        <div className="main_view">
            <Topbar toggle={toggleSideBar}/>
            <div className="main_view-inner">
              <Component />
            </div>
        </div>
      </div>
  );
}

export default App;
