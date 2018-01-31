$(document).ready(function() {
	$("#enteredEmail").focus();
	$("#successModal").iziModal();
	$("#invalidEmailModal").iziModal();
	$("#failureModal").iziModal();

	// Attach onClick handler to notifyBtn
	$("#notifyBtn").click(() => {
		sendEnteredEmailToServer($("#enteredEmail").val());
	})
});

function sendEnteredEmailToServer(email) {
	$.post("/email", {email:email}, (data) => {
		if(data) {
			$("#successModal").iziModal('open');
			$("#enteredEmail").val('');
		} else if(!data) {
			$("#invalidEmailModal").iziModal('open');
		} else {
			$("#invalidEmailModal").iziModal('open');
			$("#enteredEmail").val('');
		}
	});
}


