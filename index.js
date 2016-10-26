var exports = module.exports
exports.push = function(socket, options) {
	if(socket) {
		if(socket.emit) {
			socket.emit('pushNotification', options);
			console.log("emmited");
		}
	}
}