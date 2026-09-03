import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запросити в Energy',
						description:
							'Відскануйте QR-код, щоб приєднатися до Energy за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/share/share.routes').then((m) => m.routes),
			},
			{
				path: 'for-consumers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для споживачів',
						description: 'Відстежуйте споживання енергії, порівнюйте постачальників і керуйте своїми енергосистемами з Energy.',
					},
				},
				loadChildren: () =>
					import('./pages/for-consumers/for-consumers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-installers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для інсталяторів',
						description: 'Проєктуйте, встановлюйте, обслуговуйте та ремонтуйте сонячні, батарейні, зарядні й генераторні системи через Energy.',
					},
				},
				loadChildren: () =>
					import('./pages/for-installers/for-installers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-producers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для виробників енергії',
						description: 'Керуйте об’єктами генерації, статистикою виробництва, потужністю та продажем енергії з Energy.',
					},
				},
				loadChildren: () =>
					import('./pages/for-producers/for-producers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-suppliers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для постачальників',
						description: 'Продавайте енергетичне обладнання — панелі, батареї, зарядні станції, генератори — напряму через Energy.',
					},
				},
				loadChildren: () =>
					import('./pages/for-suppliers/for-suppliers.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
