import './sass/main.scss'; 

import {Router} from '@core/router/Router';
import {DashboardPage} from '@/mainPages/DashboardPage';
import {DocPage} from '@/mainPages/DocPage';


new Router('#app', {
	dashboard: DashboardPage,
	doc: DocPage 
});



