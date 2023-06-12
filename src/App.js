import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
        <div className='basis-[14%] h-[100vh] border'>
          <Sidebar></Sidebar>
        </div>
        <div className='basis-[86%] border'>D</div>
    </div>
  );
}

export default App;
