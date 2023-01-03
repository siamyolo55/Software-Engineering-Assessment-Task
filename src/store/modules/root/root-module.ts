import type { Module, ModuleTree } from 'vuex'
import DevicesModule from '../devices/devices-module'
import SignupModule from '../signup/signup-module'
import LoginModule from '../login/login-module'
import PatientsModule from '../patients/patients-module'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'
import type { IRootState } from './types'

const modules: ModuleTree<IRootState> = {
	DevicesModule,
	SignupModule,
	LoginModule,
	PatientsModule
}

const RootModule: Module<IRootState, IRootState> = {
	state,
	getters,
	mutations,
	actions,
	modules,
}

export default RootModule
