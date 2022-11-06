import './App.css';
import Sidebar from './components/SideBar';
//import Bulk from './components/Bulk';
import TopBar from './components/TopBar';
import Logs from './components/Logs';
import Profile from './components/Profile';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Agent from './components/Agent';


function App() {
  const [rec, setRec] = useState([]);
  useEffect(() => {
    console.log('useEffect runs');
    axios
      .get('http://192.168.122.89:6868/tags')
      .then(res => setRec(Object.values(res.data)[0]))
      .catch(err => console.error(err));
  },[]);
  console.log(rec);
  rec.map(x => console.log(x))
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className='bulk ml-20 pl-12 grid md:grid-cols-7 pt-4 bg-gray-100 right-0 mt-20'>
        {rec.map(x => 
          <Agent key="uniqu" name={x.first_name + ' ' + x.last_name} st={x.present_status == 1 ? 'p' : 'a' } />)}
      </div>
      {/*<div>
        <Bulk />
      </div>*/}

      {/* logs */}
      <div className='hidden'>
        <Logs />
      </div>

      {/* profile */}
      <div className='hidden'>
        <Profile />
      </div>

      <Sidebar />

      <TopBar />

    </div>
  );
}

export default App;
