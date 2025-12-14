import { h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { RouteNames } from '@/shared/router';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
const routes = [
	{ path: '/', name: RouteNames.main, component: MainPage },
	{ path: '/about', name: RouteNames.about, component: AboutPage },
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
