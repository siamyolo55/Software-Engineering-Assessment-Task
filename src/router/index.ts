import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LoginView from '@/views/LoginView.vue'
import type { RouteLocationNormalized as Route } from 'vue-router'
import { store } from '@/store'


const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/sign-up',
			name: 'sign-up',
			component: SignUpView
		},
		{
			path: '/',
			name: 'login',
			component: LoginView
		}
	],
})

let authenticated = (): boolean => {
	let userData = store.getters.userData

	if(userData && userData.token != "")
		return true

	return false
}

router.beforeEach(async (to: Route, _: Route, next: any) => {

	if(to.name === 'home' && !authenticated()){
		return next({name: 'login'})
	}
	else next()
	
})

export default router
