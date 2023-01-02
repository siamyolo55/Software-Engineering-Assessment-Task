$(document).ready(function () {
	window.addEventListener('message', function(event) {
		console.log(event.data)
		let patient = event.data

		$('#banner').html(`<p>Selected Patient: ${patient.name}</p>`)
	});
	
})



function getSelectedPatient() {
	/**
	 * @returns the patient selected in {@link /static/patient/index.html}.
	 *
	 *
	 * TODO Remove the dummy data
	 * TODO Retrieve the selected patient in patient iFrame
	 *
	 * ! Do not call the api here. All API calls must lie in the core Vue framework.
	 */


	return {
		address: {
			street: 'Victor Plains',
			suite: 'Suite 879',
			city: 'Wisokyburgh',
			zipcode: '90566-7771',
			geo: {
				lat: '-43.9509',
				lng: '-34.4618',
			},
		},
		collectionId: 'pwuw57n2eiwkwkm',
		collectionName: 'patients',
		created: '2022-12-27 08:43:35.377Z',
		email: 'Sincere@april.biz',
		id: 'vzj837hd3d7geup',
		name: 'Leanne Graham',
		phone: 1770736803156442,
		updated: '2022-12-27 08:45:49.520Z',
	}
}
