import { setSignup } from '@/api/signUp'
import type { ActionTree } from 'vuex'
import type { IRootState } from '../root/types'
import { type IModuleState, type TModuleActions, EModuleAction } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.SetSignupData]({ commit }, signupData) {
		try {
			const data: any = await setSignup(signupData)
			console.log(signupData);
			
			if(data.status >= 200 && data.status <= 204){
				console.log('signup worked', data.status)
			}
			
		} catch (e) {
			console.log('error signing up')
		}
	},
}
