import socketio from 'socket.io'

export default class Room {
	users: { [id: string]:  socketio.Socket } = {}
}
