import router from '.'
import type { RouteLocationNormalized as Route } from 'vue-router'
import { useStore } from 'vuex'

// MOVED NAV-GUARD LOGIC FROM HERE DUE TO IT NOT BEING EXECUTED
// MOVED TO INDEX.TS

// router.beforeEach(async (to: Route, _: Route, next: any) => {

// 	console.log('navv')

// 	let store = useStore()
// 	let token = store.getters.userData.token
// 	console.log(token)

// 	next()
// })

