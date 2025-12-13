import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths'; // 1. Импортируем

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		tsconfigPaths(), // 2. Подключаем
	],
	resolve: {
		alias: {
			// 3. Оставляем стандартный алиас для подстраховки
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
