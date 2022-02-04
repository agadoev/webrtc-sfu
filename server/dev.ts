import io from 'socket.io-client';

const client = io("http://localhost:20000");

client.on("roomid", data => console.log(data))

// типа нажали кнопку "Создать комнату"
setTimeout(() => {
	client.emit("createroom", {});
}, 3000);

console.log('test')
