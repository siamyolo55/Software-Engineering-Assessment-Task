import request from '@/utils/request'
import type { ISignUp } from '@/store/modules/signup/types'

export const setSignup = async (signupData: ISignUp) => {
	const response = await request({
		url: `candidates/records`,
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
        data: {
            ...signupData
        }
	})
	return response
}
