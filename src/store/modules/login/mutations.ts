import type { MutationTree } from 'vuex'
import { EModuleMutation, type ILoginForm, type IUserData, type IModuleState, type TModuleMutations } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_USER_DATA](state, userData: IUserData | null) {
		state.userData = userData
	},
	[EModuleMutation.SET_LOGIN_ERROR](state, loginError: boolean | null) {
		state.loginError = loginError
	},
}
