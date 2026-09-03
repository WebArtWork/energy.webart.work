import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	templateUrl: './landing.component.html',
	imports: [RouterLink, SpiderComponent, ButtonModule, TranslateDirective],
})
export class LandingComponent {}
