import type { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from 'vuex'
import type { IRootState } from '../root/types'

export interface ILoginForm {
	identity: string
	password: string
}

interface IUserRecord {
	avatar: string
	collectionId: string
	collectionName: string
	created: string
	email: string
	emailVisibility: boolean
	id: string
	name: string
	updated: string
	username: string
	verified: string
}

export interface IUserData {
	record: IUserRecord
	token: string
}

export interface IModuleState {
	loginForm: ILoginForm | null
	userData: IUserData | null
	loginError: boolean | null
}

export interface IModuleGetters {
	userData(state: IModuleState): IUserData | null
	loginError(state: IModuleState): boolean | null
}

export enum EModuleMutation {
	SET_USER_DATA = 'SET_USER_DATA',
	SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.SET_USER_DATA](state: S, userData: IUserData | null): void
	[EModuleMutation.SET_LOGIN_ERROR](state: S, loginError: boolean | null): void
	
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	UserLogin = 'USER_LOGIN',
}

export type TModuleActions = {
	[EModuleAction.UserLogin]({ commit }: AugmentedActionContext, loginForm: ILoginForm): Promise<void>
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

export type { IModuleState as LoginFormModuleState }
export { EModuleAction as LoginFormModuleAction }
export { EModuleMutation as LoginFormModuleMutation }
export type { IModuleGetters as LoginFormModuleGetters }
