import { Outlet } from 'react-router-dom';
import './App.css';
import DashboardView from './components/DashboardView';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
        <div className='basis-[14%] h-[100vh] border'>
          <Sidebar></Sidebar>
        </div>
        <div className='basis-[86%] border h-[100vh] overflow-scroll'>
          <DashboardView></DashboardView>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
    </div>
  );
}

export default App;
