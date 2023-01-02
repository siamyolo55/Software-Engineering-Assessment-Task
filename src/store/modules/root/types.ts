import type { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from 'vuex'
import type { IModuleState as IDevicesState } from '../devices/types'
import type { IModuleState as ISignupState } from '../signup/types'
import type { IModuleState as ILoginState } from '../login/types'

export interface IRootState {
	devices: IDevicesState
	signup: ISignupState
	login: ILoginState
}

export interface IRootGetters {}

export enum ERootMutation {}

export type TRootMutations = {}

export type AugmentedActionContext = {
	commit<K extends keyof TRootMutations>(
		key: K,
		payload: Parameters<TRootMutations[K]>[1]
	): ReturnType<TRootMutations[K]>
} & Omit<ActionContext<IRootState, IRootState>, 'commit'>

export enum ERootAction {}

export type TRootActions = {}

export type IRootModule<S = IRootState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
	commit<K extends keyof TRootMutations, P extends Parameters<TRootMutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<TRootMutations[K]>
} & {
	getters: {
		[K in keyof IRootGetters]: ReturnType<IRootGetters[K]>
	} & {
		dispatch<K extends keyof TRootActions>(
			key: K,
			payload?: Parameters<TRootActions[K]>[1],
			options?: DispatchOptions
		): ReturnType<TRootActions[K]>
	}
}
