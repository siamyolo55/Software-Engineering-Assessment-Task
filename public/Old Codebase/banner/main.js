$(document).ready(function () {
	window.addEventListener('message', function(event) {
		let patient = getSelectedPatient(event.data)

		$('#banner').html(`<p>Selected Patient: ${patient.name}</p>`)
	});
	
})



function getSelectedPatient(data) {
	/**
	 * @returns the patient selected in {@link /static/patient/index.html}.
	 *
	 *
	 * TODO Remove the dummy data
	 * TODO Retrieve the selected patient in patient iFrame
	 *
	 * ! Do not call the api here. All API calls must lie in the core Vue framework.
	 */


	return data
}
