import request from '@/utils/request'
import type { LoginForm } from '@/utils/types' 

export const userLogin = async (loginForm: LoginForm) => {
	const response = await request({
		url: `/candidates/auth-with-password`,
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
        data: {
            ...loginForm
        }
	})
	return response
}
