import type { MutationTree } from 'vuex'
import { EModuleMutation, type IPatient, type IModuleState, type TModuleMutations } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_PATIENTS](state, patients: IPatient[] | null) {
		state.patients = patients
	},
}
