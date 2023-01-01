import type { MutationTree } from 'vuex'
import { EModuleMutation, type ISignUp, type IModuleState, type TModuleMutations } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_SIGNUP_DATA](state, signupData: ISignUp | null) {
		state.signupData = signupData
	},
	[EModuleMutation.SET_LOGGEDIN](state, loggedIn: boolean){
		state.loggedIn = loggedIn
	}
}
