import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-what-we-do',
  imports: [CommonModule,RouterLink],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css',
})
export class WhatWeDoComponent {
  protected cardList: any = [
    {
      image: 'Education.png',
      label: 'Education',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'environment.png',
      label: 'Environment',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'Woman hygiene.png',
      label: 'Hygiene promotion',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'Nutrition and support.png',
      label: 'Nutrition Support',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'Livilihood.png',
      label: 'Livelihood & Training',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'Child.png',
      label: 'Child Protection',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'Healthcare.png',
      label: 'Health Care',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
    {
      image: 'Community.png',
      label: 'Community Engagement',
      desc: 'We help rural children especially girls stay in school, access educational support, and dream bigger. From tuition to learning materials, we ensure no child is left behind due to poverty.',
    },
  ];
}
