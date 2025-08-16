import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  protected contactForm!: FormGroup;
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobileNum: [null, Validators.required],
      message: [null, Validators.required],
    });
  }
}
