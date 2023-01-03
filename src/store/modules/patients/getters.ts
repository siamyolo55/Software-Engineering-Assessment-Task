import type { GetterTree } from 'vuex'
import type { IRootState } from '../root/types'
import type { IModuleState, IModuleGetters } from './types'

export const getters: GetterTree<IModuleState, IRootState> & IModuleGetters = {
	patients: (state) => state.patients,
}
