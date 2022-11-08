import './App.css';
import Sidebar from './components/SideBar';
//import Bulk from './components/Bulk';
import TopBar from './components/TopBar';
import Tab from './components/Logs';
import Profile from './components/Profile';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Agent from './components/Agent';
import { data } from 'autoprefixer';


function App() {
  const [webs, setWebs] = useState();
  const socket = new WebSocket('ws://192.168.122.89:6868');
  socket.onmessage = ({ data }) => {
    console.log('Message ws: ', data);
    setWebs(data)
  }
  const [tags, setTags] = useState([]);
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    console.log('useEffect runs');
    axios
      .get('http://192.168.122.89:6868/tags')
      .then(res => setTags(Object.values(res.data)[0]))
      .catch(err => console.error(err));
    // Logs
    axios
      .get('http://192.168.122.89:6868/logs')
      .then(res => setLogs(Object.values(res.data)[0]))
      .catch(err => console.error(err));
  },[webs]);
  //console.log(logs);
  logs.map(x => console.log(x))
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className='bulk ml-20 pl-12 pt-4 bg-gray-100 right-0 mt-20 grid md:grid-cols-7'> {/*grid md:grid-cols-7*/}
        {tags.map(x => 
          <Agent key={x.uid} name={x.first_name + ' ' + x.last_name} st={x.present_status == 1 ? 'p' : 'a' } />)}
      </div>
      {/*<div>
        <Bulk />
      </div>*/}

      {/* logs */}
      <div>
      <div className="ml-20 mt-20 h-max py-12 px-12 hidden">
            <table className="w-tab shadow-2xl">
                <thead className="shadow-md text-taPlatinum">
                    <tr className="h-12">
                        <th className="px-8 w-1/5 border-r-0">Nom</th>
                        <th className="px-8 w-1/5 border-r-0">Prenom</th>
                        <th className="px-8 w-1/5 border-r-0">Status</th>
                        <th className="px-8 w-1/5 border-r-0">Date</th>
                        <th className="px-8 w-1/5">Heure</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {logs.map(x => <Tab key={x.log_id} nom={x.last_name} prenom={x.first_name} etat={x.direction} 
                    date={x.time.slice(0, 9)} heure={x.time.slice(11, 19)} />)}

                </tbody>
            </table>
        </div>
      </div>
      {/*<div className='hidden'>
        <Logs />
    </div>*/}

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
