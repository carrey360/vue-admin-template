import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
	{ path: '/login', component: () => import('@/views/login/index'), hidden: true },
	{ path: '/404', component: () => import('@/views/404'), hidden: true },
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		name: 'Dashboard',
		hidden: true,
		children: [{
			path: 'dashboard',
			component: () => import('@/views/dashboard/index')
		}]
	}, {
		path: '/example',
		component: Layout,
		redirect: '/example/table',
		name: 'Example',
		meta: { title: 'Example', icon: 'example' },
		children: [
			{
				path: 'table',
				name: 'Table',
				component: () => import('@/views/table/index'),
				meta: { title: 'Table', icon: 'table' }
			}
		]
	}, {
		path: '/form',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'Form',
				component: () => import('@/views/form/index'),
				meta: { title: 'Form', icon: 'form' }
			}
		]
	}, {
		path: 'external-link',
		component: Layout,
		children: [
			{
				path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
				meta: { title: 'External Link', icon: 'link' }
			}
		]
	},
	{ path: '*', redirect: '/404', hidden: true }
]

export default new Router({
	mode: 'history', // 后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})
