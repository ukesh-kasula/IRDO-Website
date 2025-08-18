import { Component, inject, OnInit } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImpactComponent } from './impact/impact.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { BecomeADonerComponent } from './become-adoner/become-adoner.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    AboutUsComponent,
    ImpactComponent,
    WhatWeDoComponent,
    BecomeADonerComponent,
    PaymentPageComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private activatedRout: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.activatedRout.fragment.subscribe((data) => {
      if (data) {
        this.jumpToSection(data);
      }
    });
  }
  jumpToSection(section: string) {
    document
      .getElementById(section)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
  }
}
