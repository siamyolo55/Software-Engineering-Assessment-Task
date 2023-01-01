import { state as DefaultDevicesState } from '../devices/state'
import { state as DefaultSignupState } from '../signup/state'
import type { IRootState } from './types'

export const state: IRootState = {
	devices: DefaultDevicesState,
	signup: DefaultSignupState
}
