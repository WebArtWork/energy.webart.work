import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-installers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-installers.component.html',
	styleUrl: './for-installers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForInstallersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які роботи можна вести через Energy?',
			answer: 'Проєктування, встановлення, налаштування, обслуговування й ремонт сонячних, батарейних, зарядних та генераторних систем.',
		},
		{
			question: 'Як я отримую нові замовлення?',
			answer: 'Заявки від споживачів надходять із прив’язкою до конкретної системи та адреси, тож ви одразу бачите обсяг і тип роботи.',
		},
		{
			question: 'Чи можу я вести облік обладнання, яке використовую на об’єктах?',
			answer: 'Так. Кожне встановлення пов’язане з обладнанням, витратами та статусом роботи, тож історія об’єкта зберігається повністю.',
		},
	];
}
