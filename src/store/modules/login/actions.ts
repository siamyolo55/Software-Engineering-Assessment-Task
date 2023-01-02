import { userLogin } from '@/api/login'
import type { ActionTree } from 'vuex'
import type { IRootState } from '../root/types'
import { type IModuleState, type TModuleActions, EModuleAction, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.UserLogin]({ commit }, loginForm ) {
		try {
			const data: any = await userLogin(loginForm)
			// Process data
			commit(EModuleMutation.SET_USER_DATA, data)
		} catch (e) {
			console.log('inside catch bloc')
			commit(EModuleMutation.SET_USER_DATA, null)
			commit(EModuleMutation.SET_LOGIN_ERROR, true)
		}
	},
}
