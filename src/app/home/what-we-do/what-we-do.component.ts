import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-what-we-do',
  imports: [CommonModule, RouterLink],
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
      desc: 'Our initiatives focus on environmental protection and sustainability. We organize tree plantation drives, awareness campaigns on climate change, and promote eco-friendly practices such as waste management and water conservation.',
    },
    {
      image: 'Woman hygiene.png',
      label: 'Hygiene promotion',
      desc: 'Good hygiene saves lives. We run campaigns on sanitation, menstrual hygiene awareness, and clean drinking water practices. By educating families and schools, we help reduce illness and create healthier communities',
    },
    {
      image: 'Nutrition and support.png',
      label: 'Nutrition Support',
      desc: 'Malnutrition is one of the biggest challenges for underprivileged children. Our NGO provides nutritious meals, supplements, and food kits to children, pregnant women, and vulnerable families, ensuring no one is left hungry',
    },
    {
      image: 'Livilihood.png',
      label: 'Livelihood & Training',
      desc: 'To promote self-reliance, we provide skill development and vocational training for youth and women. From tailoring and handicrafts to digital skills and entrepreneurship workshops, our training programs create employment opportunities and sustainable income sources',
    },
    {
      image: 'Child.png',
      label: 'Child Protection',
      desc: 'We ensure the safety and rights of children through awareness campaigns, rescue efforts, and rehabilitation programs. Our team works to prevent child labor, child marriage, and abuse, while creating safe spaces where every child can thrive',
    },
    {
      image: 'Healthcare.png',
      label: 'Health Care',
      desc: 'We provide accessible healthcare services to underserved communities through health camps, vaccination drives, maternal care support, and nutrition awareness programs. Our goal is to reduce preventable diseases and promote healthy living',
    },
    {
      image: 'Community.png',
      label: 'Community Engagement',
      desc: 'We believe real change comes from within the community. Our programs focus on mobilizing people, building leadership, and fostering collaboration for sustainable development. Through workshops, awareness drives, and support groups, we strengthen communities to stand together',
    },
  ];
}
