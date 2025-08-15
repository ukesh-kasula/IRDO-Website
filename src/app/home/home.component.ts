import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImpactComponent } from './impact/impact.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { BecomeADonerComponent } from './become-adoner/become-adoner.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@Component({
  selector: 'app-home',
  imports: [AboutUsComponent,ImpactComponent,WhatWeDoComponent,BecomeADonerComponent,PaymentPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
