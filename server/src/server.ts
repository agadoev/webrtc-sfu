import http from 'http'
import socketio from 'socket.io'
import Room from './room'
import crypto from 'crypto'


export default class Server {

	rooms: { [id: string]: unknown} = {}

	io: socketio.Server;
	srv: http.Server;

	constructor () {
		this.srv = new http.Server();
		this.io = new socketio.Server(this.srv);
	}

	listen() {
		this.srv.listen(20000);
		this.io.on("connection", this.handleNewConnection)
		console.log("server listening...");
	}

	handleNewConnection(clientSocket: socketio.Socket) {
		console.log(clientSocket.id);

		// create room
		clientSocket.on("createroom", () => {
			var uuid = crypto.randomUUID();

			console.log("room created: ", uuid);

			clientSocket.emit("roomid", {roomId: uuid});
		});

		// connect to room
		clientSocket.on("connectroom", () => {

		})

		// video stream
		clientSocket.on("videostream", (ev: unknown) => {
			console.log(ev)
		})
			
	}
}
