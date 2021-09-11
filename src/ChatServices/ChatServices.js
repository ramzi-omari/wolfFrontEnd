import { io } from "socket.io-client"
let socket

export const initialSocket = (room) => {
  socket = io("https://wolfap.herokuapp.com/", { transports: ["websocket"] })
  // probably allow cors here
  //('http://localhost:8000', , {transports: ['websocket']});
  if (socket && room) {
    socket.emit("join", room)
    console.log("Connected " + room)
  }
}

export const disconnectSocket = () => {
  console.log("Disconnecting socket...")
  if (socket) socket.disconnect()
}

export const subscribeToChat = (cb) => {
  if (!socket) return true
  socket.on("chat", (msg) => {
    console.log("Websocket event received!")
    return cb(null, msg)
  })
}

export const sendMessage = (room, message) => {
  if (socket) socket.emit("chat", { message, room })
}
