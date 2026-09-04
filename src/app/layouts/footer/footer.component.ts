import {
	Component,
	computed,
	inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CompanyService } from '../../features/company/company.service';
import { FooterLink } from './footer.types';

@Component({
	selector: 'layout-footer',
	templateUrl: './footer.component.html',
	imports: [RouterLink, TranslateDirective],
})
export class FooterComponent {
	readonly userService = inject(UserService);
	readonly companyService = inject(CompanyService);

	readonly year = new Date().getFullYear();
	readonly metaTitle = this.companyService.company().title;
	readonly metaDescription = this.companyService.company().description;
	readonly metaImage = this.companyService.company().image;

	private readonly allLinks = computed<FooterLink[]>(() => [
		{ label: 'Головна', icon: 'home', to: '/' },
		{ label: 'Для споживачів', icon: 'bolt', to: '/for-consumers' },
		{ label: 'Для інсталяторів', icon: 'wrench', to: '/for-installers' },
		{ label: 'Для виробників енергії', icon: 'sun', to: '/for-producers' },
		{ label: 'Для постачальників', icon: 'briefcase', to: '/for-suppliers' },
		{ label: 'Мій профіль', icon: 'user', to: '/profile' },
		{
			label: 'Користувачі',
			icon: 'user-edit',
			to: '/admin/users',
			adminOnly: true,
		},
		{
			label: 'Клієнти',
			icon: 'users',
			to: '/admin/clients',
			adminOnly: true,
		},
		{
			label: 'Форми',
			icon: 'table',
			to: '/admin/forms',
			adminOnly: true,
		},
		{
			label: 'Переклади',
			icon: 'language',
			to: '/admin/translates',
			adminOnly: true,
		},
	]);

	readonly links = computed(() => {
		const isAdmin = this.userService.role('admin');
		return this.allLinks().filter((l) => !l.adminOnly || isAdmin);
	});
}
