import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-installers.component').then((m) => m.ForInstallersPageComponent),
	},
];
