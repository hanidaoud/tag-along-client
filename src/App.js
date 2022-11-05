import './App.css';
import Sidebar from './components/SideBar';
import Bulk from './components/Bulk';
import TopBar from './components/TopBar';
import Logs from './components/Logs';
import Profile from './components/Profile';


function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      <div className='hidden'>
        <Bulk />
      </div>

      {/* logs */}
      <div className='hidden'>
        <Logs />
      </div>

      {/* profile */}
      <div >
        <Profile />
      </div>

      <Sidebar />

      <TopBar />

    </div>
  );
}

export default App;
