function finishTask(task, button) {
	var btn = document.getElementById(button);
	var task = document.getElementById(task);
	var taskList = document.getElementById('taskList');
	btn.setAttribute("class", "btn btn-primary disabled");
	btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
	btn.innerHTML = "Thanks!";
	taskList = taskList.removeChild(task);
}

function finishTask2(task, button) {
	var btn = document.getElementById(button);
	var task = document.getElementById(task);
	var taskList = document.getElementById('taskList2');
	btn.setAttribute("class", "btn btn-primary disabled");
	btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
	btn.innerHTML = "Thanks!";
	taskList = taskList.removeChild(task);
}

function claimTask(task, button) {
	var btn = document.getElementById(button);
	var task = document.getElementById(task);
	var taskList = document.getElementById('taskList');

	if (btn.innerHTML == "Claim Task") {
		btn.innerHTML = "Task Claimed!";
		taskList = taskList.appendChild(task);
		btn.setAttribute("class", "btn btn-primary disabled");
		btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
	} else if (btn.innerHTML == "Task Finished"){
		taskList = taskList.removeChild(task);
		btn.innerHTML = "Thanks!";
		btn.setAttribute("class", "btn btn-primary disabled");
		btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
	}	
}

function claimTask2(task, button) {
	var btn = document.getElementById(button);
	var task = document.getElementById(task);
	var taskList = document.getElementById('taskList2');

	if (btn.innerHTML == "Claim Task") {
		btn.innerHTML = "Task Claimed!";
		taskList = taskList.appendChild(task);
		btn.setAttribute("class", "btn btn-primary disabled");
		btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
	} else if (btn.innerHTML == "Task Finished"){
		taskList = taskList.removeChild(task);
		btn.innerHTML = "Thanks!";
		btn.setAttribute("class", "btn btn-primary disabled");
		btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
	}	
}


function changeButton(button) {
	var btn = document.getElementById(button);
	if (btn.innerHTML != "Claim Task") {
		btn.innerHTML = "Task Finished";
		btn.setAttribute("class", "btn btn-primary active");
	}
}

function switchButton(button) {
	var btn = document.getElementById(button);
	btn.innerHTML = "Submit";
	btn.setAttribute("class", "btn btn-primary");
}


function sendMessage(modal, button) {
	var modal = document.getElementById(modal);
	var btn = document.getElementById(button);
	event.preventDefault();
	btn.innerHTML = "Submitted!";
	btn.setAttribute("class", "btn btn-primary disabled");
	btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979;")
}

function scrollCard() {
	var card1 = document.getElementById("troop75");
	var card2 = document.getElementById("chicagocares");

	if (card1.style.display === "none") {
		card1.setAttribute("style", "display: block");
		card2.setAttribute("style", "display: none");
	} else {
		card1.setAttribute("style", "display: none");
		card2.setAttribute("style", "display: block");
	}
}

function approved(button, button1, modal) {
	var btn = document.getElementById(button);
	var btn1 = document.getElementById(button1);
	var modal = document.getElementById(modal);
	var taskList = document.getElementById('approvalQueue');
	btn.innerHTML = "Approved!";
	btn.setAttribute("class", "btn btn-primary disabled");
	btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979; width: 150px");
	btn1.setAttribute("style", "display: none;");
	taskList.removeChild(modal);
}

function denied(button, button1, modal) {
	var btn = document.getElementById(button);
	var btn1 = document.getElementById(button1);
	var modal = document.getElementById(modal);
	var taskList = document.getElementById('approvalQueue');
	btn.innerHTML = "Denied!";
	btn.setAttribute("class", "btn btn-primary disabled");
	btn.setAttribute("style", "background-color: #ee0979; border-color: #ee0979; width: 150px");
	btn1.setAttribute("style", "display: none;");
	taskList.removeChild(modal);
}