import request from '@/utils/request'

export const getPatients = async (token: string) => {
	const response = await request({
		url: `/patients/records`,
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
		},
	})
	return response
}
