import { state as DefaultDevicesState } from '../devices/state'
import { state as DefaultSignupState } from '../signup/state'
import { state as DefaultLoginState } from '../login/state'
import { state as DefaultPatientsState } from '../patients/state'
import type { IRootState } from './types'

export const state: IRootState = {
	devices: DefaultDevicesState,
	signup: DefaultSignupState,
	login: DefaultLoginState,
	patients: DefaultPatientsState
}
