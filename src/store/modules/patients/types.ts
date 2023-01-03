import type { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from 'vuex'
import type { IRootState } from '../root/types'

interface IPatientAddress {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: {
		lat: string
		lng: string
	}
}

export interface IPatient {
	address: IPatientAddress
	collectionId: string
	collectionName: string
	created: string
	email: string
	id: string
	name: string
	phone: string
	updated: string
}

export interface IModuleState {
	patients: IPatient[] | null
}

export interface IModuleGetters {
	patients(state: IModuleState): IPatient[] | null
}

export enum EModuleMutation {
	SET_PATIENTS = 'SET_PATIENTS',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.SET_PATIENTS](state: S, patients: IPatient[] | null): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	GetPatients = 'GET_PATIENTS',
}

export type TModuleActions = {
	[EModuleAction.GetPatients]({ commit }: AugmentedActionContext, token: string): Promise<void>
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

export type { IModuleState as PatientsModuleState }
export { EModuleAction as PatientsModuleAction }
export { EModuleMutation as PatientsModuleMutation }
export type { IModuleGetters as PatientsModuleGetters }
