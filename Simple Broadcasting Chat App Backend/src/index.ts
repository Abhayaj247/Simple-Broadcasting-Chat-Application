import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
    if (parsedMessage.type == "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type == "chat") {
      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket == socket) {
          currentUserRoom = allSockets[i].room;
        }
      }
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room == currentUserRoom) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
      /*
        const currentUser = allSockets.find((x) => x.socket == socket)
        if(!currentUser) {
            console.error("Socket not found in allSockets");
            return;
        }
        const currentUserRoom = currentUser.room;
        allSockets.forEach((user) => {
            if(user.room == currentUserRoom ){
                user.socket.send(parsedMessage.payload.message);
            }
        });
        */
    }
  });
});
