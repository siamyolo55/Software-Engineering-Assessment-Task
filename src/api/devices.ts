import request from '@/utils/request'

export const getDevices = async () => {
	const response = await request({
		url: `/devices/records`,
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response
}
