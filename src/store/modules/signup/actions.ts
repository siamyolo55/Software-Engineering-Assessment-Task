import { setSignup } from '@/api/signUp'
import type { ActionTree } from 'vuex'
import type { IRootState } from '../root/types'
import { type IModuleState, type TModuleActions, EModuleAction, EModuleMutation  } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.SetSignupData]({ commit }, signupData) {
		try {
			const data: any = await setSignup(signupData)

			console.log(data)
			
			if(data.name === signupData.name){
				console.log('signup worked')
				commit(EModuleMutation.SET_LOGGEDIN, true)
			}
			
		} catch (e) {
			console.log('error signing up')
			commit(EModuleMutation.SET_LOGGEDIN, false)
		}
	},
}
