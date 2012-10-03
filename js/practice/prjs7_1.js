

function send_alerts() {
	window.alert("Hi there, and welcome to my page!");
	window.alert("Please sign the guest book before you leave!");
	window.alert("Are these alerts annoying you yet? Ha, Ha!");
}


window.onload = function() {
	var sendAlertButton = document.getElementById("send_alerts");

	sendAlertButton.onclick = send_alerts;
};