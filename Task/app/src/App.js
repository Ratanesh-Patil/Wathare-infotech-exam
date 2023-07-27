// socket app
import React, {useState , useEffect} from 'react';
import socketIOClient from 'socket.io-client'
import {LineChart,XAxis,Tooltip,CartesianGrid,Line} from 'recharts'
import './App.css';
function App() {
  const [data , setData] = useState ( [] )
  useEffect(()=>{
    const socket = socketIOClient("http://127.0.0.1:4001/")
    socket.on("message",(data)=>{
      setData(data)
    })
  },[])
  return (
    <div>
      <h1 className='title'>Sample Data for Wathare Infotech Solutions</h1>
     
      <LineChart
    width={1000}
    height={500}
    data={data}
    margin={{ top: 5, right: 20, left: 30, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="y" stroke="#387908" yAxisId={1} />
</LineChart>
    </div>
  );
}

export default App;
