import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';

interface AudienceCard {
	path: string;
	number: string;
	icon: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './landing.component.html',
	imports: [RouterLink, SpiderComponent, ButtonModule, TranslateDirective],
})
export class LandingComponent {
	readonly audiences: AudienceCard[] = [
		{
			path: '/for-consumers',
			number: '01',
			icon: 'pi-bolt',
			title: 'Споживачі',
			description:
				'Стежте за споживанням, порівнюйте тарифи й керуйте своїми енергосистемами в одному профілі.',
		},
		{
			path: '/for-installers',
			number: '02',
			icon: 'pi-wrench',
			title: 'Інсталятори',
			description:
				'Отримуйте заявки на монтаж і обслуговування та ведіть повну історію робіт по кожному об’єкту.',
		},
		{
			path: '/for-producers',
			number: '03',
			icon: 'pi-sun',
			title: 'Виробники енергії',
			description:
				'Керуйте об’єктами генерації, стежте за потужністю та продавайте вироблену енергію напряму.',
		},
		{
			path: '/for-suppliers',
			number: '04',
			icon: 'pi-truck',
			title: 'Постачальники',
			description:
				'Публікуйте каталог обладнання — панелі, батареї, зарядні станції, генератори — та продавайте його напряму.',
		},
	];
}
