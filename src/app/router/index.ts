import { h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { IndexPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
const routes = [
	{ path: '/', component: IndexPage },
	{ path: '/about', component: AboutPage },
	{
		path: '/:catchAll(.*)*',
		name: 'NotFound',
		component: h('div', {}, '404 Not Found'),
	},
];
export const router = createRouter({
	history: createWebHistory(),
	routes,
});
