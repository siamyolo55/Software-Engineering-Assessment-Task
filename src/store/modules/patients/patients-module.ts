import type { Module } from 'vuex'
import type { IRootState } from '../root/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'
import type { IModuleState } from './types'

const PatientsModule: Module<IModuleState, IRootState> = {
	state,
	getters,
	mutations,
	actions,
}

export default PatientsModule
