$(document).ready(function () {
	let patients = getPatients()

	$('#patients').html(createTable(patients))

	setupClickEvent()
})

function createTable(patients) {
	let html = `<table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                <tbody>`

	patients.forEach((patient) => {
		html += `       <tr>`
		html += `           <td>${patient.name}</td>`
		html += `           <td>${patient.email}</td>`
		html += `           <td>${patient.phone}</td>`
		html += `       </tr>`
	})

	html += `   </tbody>
            </table>`
	return html
}

function getPatients() {
	/**
	 * @returns Patients list
	 *
	 * TODO: Remove the dummy data
	 * TODO: use backend API to fetch patients from the database.
	 *
	 *
	 * ! Do not call any API here. All API calls must lie in the core Vue framework.
	 *
	 */
	return [
		{
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
		},
		{
			address: {
				street: 'Kulas Light',
				suite: 'Apt. 556',
				city: 'Gwenborough',
				zipcode: '92998-3874',
				geo: {
					lat: '-37.3159',
					lng: '81.1496',
				},
			},
			collectionId: 'pwuw57n2eiwkwkm',
			collectionName: 'patients',
			created: '2022-12-27 08:44:37.619Z',
			email: 'Shanna@melissa.tv',
			id: 'jkrozx5hq8pvoa3',
			name: 'Ervin Howell',
			phone: 10692659309125,
			updated: '2022-12-27 08:45:36.356Z',
		},
		{
			address: {
				street: 'Douglas Extension',
				suite: 'Suite 847',
				city: 'McKenziehaven',
				zipcode: '59590-4157',
				geo: {
					lat: '-68.6102',
					lng: '-47.0653',
				},
			},
			collectionId: 'pwuw57n2eiwkwkm',
			collectionName: 'patients',
			created: '2022-12-27 08:46:33.531Z',
			email: 'Nathan@yesenia.net',
			id: 'cn0glbv40oig6u9',
			name: 'Clementine Bauch',
			phone: 14631234447,
			updated: '2022-12-27 08:46:33.531Z',
		},
		{
			address: {
				street: 'Hoeger Mall',
				suite: 'Apt. 692',
				city: 'South Elvis',
				zipcode: '53919-4257',
				geo: {
					lat: '29.4572',
					lng: '-164.2990',
				},
			},
			collectionId: 'pwuw57n2eiwkwkm',
			collectionName: 'patients',
			created: '2022-12-27 08:47:02.775Z',
			email: 'Julianne.OConner@kory.org',
			id: 'l0smr5e39j7o62q',
			name: 'Patricia Lebsack',
			phone: 4931709623156,
			updated: '2022-12-27 08:47:02.775Z',
		},
	]
}

function setupClickEvent() {
	$('#patients tbody').on('dblclick', 'tr', function () {
		let children = $(this).children()
		let selectedPatient = {
			name: children[0].innerHTML,
			email: children[1].innerHTML,
			phone: children[2].innerHTML,
		}
		// console.log(selectedPatient)
		window.parent.postMessage(selectedPatient, "*")
	})

	/**
	 * TODO: implement necessary logic to show this patient to banner iFrame
	 */
}
