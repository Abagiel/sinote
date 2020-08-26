import { Router } from '@/routes/Router';
import { DashboardPage } from '@/pages/DashboardPage';
import { NotePage } from '@/pages/NotePage';
import './sass/index.scss'

new Router('#app', {
	dashboard: DashboardPage,
	note: NotePage 
}, {
	'max-length': 1000
});
