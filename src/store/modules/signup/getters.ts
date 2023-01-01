import type { GetterTree } from 'vuex'
import type { IRootState } from '../root/types'
import type { IModuleState, IModuleGetters } from './types'

export const getters: GetterTree<IModuleState, IRootState> & IModuleGetters = {
	signupData: (state) => state.signupData,
	loggedIn: (state) => state.loggedIn
}
