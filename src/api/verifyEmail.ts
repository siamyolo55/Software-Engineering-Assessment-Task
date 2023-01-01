import request from '@/utils/request'

export const verifyUserEmail = async (email: string) => {
	const response = await request({
		url: `candidates/request-verification`,
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
        data: {
            email
        }
	})
	return response
}
