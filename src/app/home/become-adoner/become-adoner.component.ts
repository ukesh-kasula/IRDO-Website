import { CommonModule } from '@angular/common';
import { Component, destroyPlatform } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-become-adoner',
  imports: [CommonModule, RouterLink],
  templateUrl: './become-adoner.component.html',
  styleUrl: './become-adoner.component.css',
})
export class BecomeADonerComponent {
  protected annualReport: any = [
    {
      image: 'img1.png',
      title: 'Nutrition awareness session:',
      desc: `
        <ul>
          <li>To bring awareness on healthy &amp; Balance Diet among children.</li>
          <li>Demonstrate food recipe</li>
          <li>The Nutrition Program ensures that participating Children receive food that are based on nutritional standards and plant based.</li>
        </ul>
      `,
    },
    {
      image: 'img2.png',
      title:
        'Accelerating the services for Health and Hygiene promotion in vulnerable community:',
      desc: `More than <span class="number">1Lakh</span> have been screened on TB and <span class="number">562 people</span> have been given TB medicines. Similarly, this year also we are working to eliminate TB by identifying more people with TB patients.`,
    },
    {
      image: 'img3.png',
      title: 'Education support program:',
      desc: `We distributed notebooks, test books and reading materials to girls studying in economically backward families in Nandanavanam area so that they do not miss out on education. So far, <span class="number">34 girls</span> have received educational assistance in this area.`,
    },
    {
      image: 'img4.png',
      title: 'VERISK Project: Public Library:',
      desc: `The main purpose of this is to help local students and unemployed individuals to utilize this library and achieve higher positions in life. As part of the Verics project, library has been established in Ravindra Nagar Colony in Uppal area. This library can accommodate nearly <span class="number">50 people</span> to study at the same time. It is particularly suitable for students preparing for competitive examinations.`,
    },
    {
      image: 'img5.png',
      title: 'Wall Painting:',
      desc: `Children and employees collaborated to create useful paintings for kids on the school walls. In particular, images of fruits, animals, play materials, etc., that children like were placed in the nursery classroom. Similarly, pictures of freedom fighters were put up on the outside walls. This program was joyfully continued with the participation of children, teachers, and company employees.`,
    },
    {
      image: 'img6.png',
      title: 'HNF Nutrition Project:',
      desc: `A hundred days' nutrition was distributed to <span class="number">200 students</span> in the school. Since most of the children in this center are the children of daily wage labours, it was identified that they have low immunity, and hence we decided to provide this nutrition. After hundred days, we observed that the children showed increased alertness and attention towards their studies. As a result, the teachers and parents were very happy.`,
    },
    {
      image: 'img7.jpg',
      title: 'Free Distribution of Playing Equipment:',
      desc: `A hundred days' nutrition was distributed to <span class="number">200 students</span> in the school. Since most of the children in this center are the children of daily wage labours, it was identified that they have low immunity, and hence we decided to provide this nutrition. After hundred days, we observed that the children showed increased alertness and attention towards their studies. As a result, the teachers and parents were very happy.`,
    },
  ];

  protected reach: any = [
    {
      title: 'Activities',
      count: '3',
      desc: 'states (Telangana, Andhra Pradesh & Tamil Nadu)',
    },
    {
      title: 'Training',
      count: '100+',
      desc: 'Women trained to start their own enterprises',
    },
    {
      title: 'Healthcare',
      count: '1Lakh',
      desc: 'states (Telangana, Andhra Pradesh & Tamil Nadu)',
    },
    {
      title: 'Nutritional Support',
      count: '200+',
      desc: 'Individuals received timely TB treatment and care',
    },
  ];
  currentSlide = 0;

  nextSlide() {
    if (this.currentSlide < this.annualReport.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.annualReport.length - 1;
    }
  }
  ngAfterViewInit() {
    const track = document.querySelector<HTMLElement>('.carousel-track');
    if (!track) return;

    let startX = 0;
    let currentX = 0;
    let index = 0;
    const slides = track.children.length;

    track.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      currentX = startX;
    });

    track.addEventListener('touchmove', (e: TouchEvent) => {
      currentX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
      if (startX - currentX > 50 && index < slides - 1) {
        index++;
      } else if (currentX - startX > 50 && index > 0) {
        index--;
      }
      track.style.transform = `translateX(-${index * 100}%)`;
    });
  }
}
