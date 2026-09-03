import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-consumers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-consumers.component.html',
	styleUrl: './for-consumers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForConsumersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує користування Energy?',
			answer: 'Відстеження споживання енергії та порівняння тарифів безкоштовне для приватних споживачів.',
		},
		{
			question: 'Чи можу я підключити кілька систем — сонячні панелі, батарею та зарядну станцію?',
			answer: 'Так. Усі ваші енергетичні системи відображаються в одному профілі з окремою статистикою по кожній.',
		},
		{
			question: 'Як порівняти постачальників і тарифи?',
			answer: 'Energy показує вашу реальну історію споживання поруч із доступними тарифами, тож видно, скільки ви заощадите при переході.',
		},
	];
}
