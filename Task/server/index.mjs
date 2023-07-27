
import express from 'express'
import http from 'http'
import * as socketio from 'socket.io'
const port = 4001

const app=express()
const httpServer = http.createServer(app)
const server = new socketio.Server( httpServer, {
    cors : {
        origin : '*',
    }
})
let timeChenge
const data = [
  { name : "Brakes", x: Math.random() *10, y: Math.random() *10 },
  { name : "Clutch", x: Math.random() *10, y: Math.random() *10 },
  { name : "Wheel", x: Math.random() *10, y: Math.random() *10 },
  { name : "Gear", x: Math.random() *10, y: Math.random() *10 },
  { name : "xyz", x: Math.random() *10, y: Math.random() *10 },
 
];
server.on("connection",(socket)=>{
    console.log("connected")
    if(timeChenge) clearInterval(timeChenge)

    // if(data.length > 5 ){
    //     data.reverse().pop()
    //     data.reverse()
    // }
    // data.push( { name : data.name, x: Math.random() *10, y: Math.random() *10 })
    setInterval(()=> socket.emit("message",data),1000)
   
})

httpServer.listen(port)