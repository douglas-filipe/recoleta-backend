import { io } from './app'
export class ChatMessage {
    static Messages() {
        io.on("connection", (socket) => {
            console.log("User connected: ", socket.id)
        })
    }
}