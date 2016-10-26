if(socket) {
	if(socket.on) {
		socket.on('pushNotification', function(options) {
			pushNotification.notify(options);
		})
	}
}

(function() {
	Notification.requestPermission();
	function notify(options) {
		var title = options.title || "Notification";
		if (!("Notification" in window)) {
		    alert("This browser does not support desktop notification");
	  	} else if (Notification.permission === "granted") {
			new Notification(title ,options);
	    } else if (Notification.permission !== 'denied') {
	    	Notification.requestPermission(function (permission) {
				if (permission === "granted") {
					new Notification("title" ,{body: body});
				}
	    });
	  }
	}
	window.pushNotification = {
		notify: notify
	}
})();