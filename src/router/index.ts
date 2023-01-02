import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LoginView from '@/views/LoginView.vue'


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

export default router
