// $(document).ready(function () {
// 	let patients = getPatients()

// 	$('#patients').html(createTable(patients))

// 	setupClickEvent()
// })

window.addEventListener('message', (event) => {
	let data = event.data.patients
	let patients = getPatients(data)
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

function getPatients(patients) {
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
	return patients
}

function setupClickEvent() {
	$('#patients tbody').on('dblclick', 'tr', function () {
		let children = $(this).children()
		let selectedPatient = {
			name: children[0].innerHTML,
			email: children[1].innerHTML,
			phone: children[2].innerHTML,
		}
		window.parent.postMessage(selectedPatient, "*")
	})

	/**
	 * TODO: implement necessary logic to show this patient to banner iFrame
	 */
}
