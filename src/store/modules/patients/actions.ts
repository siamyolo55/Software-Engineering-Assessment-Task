import { getPatients } from '@/api/patients'
import type { ActionTree } from 'vuex'
import type { IRootState } from '../root/types'
import { type IModuleState, type TModuleActions, EModuleAction, type IPatient, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.GetPatients]({ commit }, token) {
		try {
			console.log(token)
			const data: any = await getPatients(token)
			// Process data
			const patients = data.items as IPatient[]
			commit(EModuleMutation.SET_PATIENTS, patients)
		} catch (e) {
			console.log('catttthhh')
			commit(EModuleMutation.SET_PATIENTS, null)
		}
	},
}
