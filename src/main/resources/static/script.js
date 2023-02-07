var stomClient = null;

function connect() {
	let socket = new SockJS("/server1")
	stomClient = Stomp.over(socket)
	stomClient.connect({}, function(frame) {
		console.log("Connected" + frame)
		$("#name-from").addClass('d-none')
		$("#chat-room").removeClass('d-none')
		stomClient.subscribe("/topic/return-to", function(response) {
			showMessage(JSON.parse(response.body))
		})
	})
}
function sendMessage() {
	let jsonOb = {
		name: localStorage.getItem("name"),
		content: $("#message-value").val()
	}
	stomClient.send("/app/message", {}, JSON.stringify(jsonOb));
}
function showMessage(message) {
	$("#message-conatiner-table").prepend(`<tr><td><b>${message.name} : </b>${message.content}</td></tr>`)
}



$(document).ready((e) => {
	$("#login").click(() => {
		let name = $("#name-value").val()
		localStorage.setItem("name", name)
		$("#name-title").html(`Welcome, <b>${name}</b>`)
		connect();
	})

	$("#send").click(() => {
		sendMessage();
	})
	
	$("#logout").click(() =>{
		localStorage.removeItem("name")
		if(stomClient==null){
			stomClient.disconnect()
			$("#name-from").removeClassGG('d-none')
			$("#chat-room").addClass('d-none')
		
		}
	})
})