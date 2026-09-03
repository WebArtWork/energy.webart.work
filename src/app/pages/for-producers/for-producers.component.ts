import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-producers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-producers.component.html',
	styleUrl: './for-producers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForProducersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які об’єкти генерації можна вести в Energy?',
			answer: 'Сонячні, вітрові й інші виробничі потужності — з локацією, потужністю та підключеним обладнанням.',
		},
		{
			question: 'Чи бачу я статистику виробництва по кожному об’єкту окремо?',
			answer: 'Так. Обсяг генерації, коефіцієнт використання потужності та події обслуговування фіксуються по кожному об’єкту.',
		},
		{
			question: 'Чи можу я продавати вироблену енергію через платформу?',
			answer: 'Так. Energy дозволяє публікувати обсяги на продаж і укладати угоди з покупцями напряму.',
		},
	];
}
