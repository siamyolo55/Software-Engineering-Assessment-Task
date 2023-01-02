import { createStore } from 'vuex'
import type { IModule as IDevicesModule } from './modules/devices/types'
import type { IModule, IModule as ISignupModule } from './modules/signup/types'
import type { IModule as ILoginModule } from './modules/login/types'
import RootModule from './modules/root/root-module'
import type { IRootState } from './modules/root/types'

export const store = createStore<IRootState>(RootModule)

type StoreModules = {
	devices: IDevicesModule
	signup: ISignupModule
	login: ILoginModule
}

//! README
/**
 * To add new module, follow the following steps:
 * 1. Duplicate any module directory
 * 2. Change the module's types
 * 3. Implement states
 * 4. Implement getters
 * 5. Implement Mutations
 * 6. Implement Actions
 * 7. Change the alias names in the module's `index.ts` file
 * 8. Add the new module to `src/store/modules/index.ts`
 * 9. Add new state interface to {@link IRootState}
 * 10. Add new state to {@link state}
 * 10. Add new module to `modules` in {@link RootModule}
 * 11. Add new module to {@link StoreModules}
 * 12. Add the new module to the type definition of {@link Store}
 *
 * ? For more on Vuex: https://vuex.vuejs.org/
 */
// export type Store = IDevicesModule<Pick<StoreModules, 'devices'>>
// export type Store = ISignupModule<Pick<StoreModules, 'signup'>>
export type Store = IModule<Pick<StoreModules, 'devices' | 'signup' | 'login'>>

