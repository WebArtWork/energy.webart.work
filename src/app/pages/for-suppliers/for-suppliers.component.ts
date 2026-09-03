import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-suppliers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-suppliers.component.html',
	styleUrl: './for-suppliers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSuppliersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Яке обладнання можна продавати через Energy?',
			answer: 'Сонячні панелі, батареї, інвертори, зарядні станції, генератори та інші компоненти енергосистем.',
		},
		{
			question: 'Хто мої покупці на платформі?',
			answer: 'Споживачі, що обирають обладнання для власних систем, та інсталятори, які закуповують для об’єктів клієнтів.',
		},
		{
			question: 'Чи можу я вести каталог із цінами та наявністю?',
			answer: 'Так. Кожна позиція має характеристики, ціну та сумісність, тож покупці бачать усе необхідне для вибору.',
		},
	];
}
