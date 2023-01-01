import type { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from 'vuex'
import type { IRootState } from '../root/types'

export interface ISignUp {
	username: string
	email: string
	password: string
	retypePassword: string
	name: string,
	emailVisibility: boolean
}


export interface IModuleState {
	signupData: ISignUp | null
	loggedIn: boolean
}

export interface IModuleGetters {
	signupData(state: IModuleState): ISignUp | null
	loggedIn(state: IModuleState): boolean
}

export enum EModuleMutation {
	SET_SIGNUP_DATA = 'SET_SIGNUP_DATA',
	SET_LOGGEDIN = 'SET_LOGGEDIN'
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.SET_SIGNUP_DATA](state: S, signupData: ISignUp | null): void
	[EModuleMutation.SET_LOGGEDIN](state: S, loggedIn: boolean): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	SetSignupData = 'SET_SIGNUP_DATA',
}

export type TModuleActions = {
	[EModuleAction.SetSignupData]({ commit }: AugmentedActionContext, signupData: ISignUp): Promise<void>
}

export type IModule<S = IModuleState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
	commit<K extends keyof TModuleMutations, P extends Parameters<TModuleMutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<TModuleMutations[K]>
} & {
	getters: {
		[K in keyof IModuleGetters]: ReturnType<IModuleGetters[K]>
	} & {
		dispatch<K extends keyof TModuleActions>(
			key: K,
			payload?: Parameters<TModuleActions[K]>[1],
			options?: DispatchOptions
		): ReturnType<TModuleActions[K]>
	}
}

export type { IModuleState as SignupModuleState }
export { EModuleAction as SignupModuleAction }
export { EModuleMutation as SignupModuleMutation }
export type { IModuleGetters as SignupModuleGetters }
