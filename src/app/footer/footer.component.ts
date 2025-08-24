import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  protected contactForm!: FormGroup;
  protected isLoading:boolean = false
  private toastr = inject(ToastrService);
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobileNum: [null, Validators.required],
      message: [null, Validators.required],
    });
  }
  submitForm() {
    console.log(this.contactForm.value);
    if (this.contactForm.invalid) {
      alert('Please fill all fields.');
      return;
    }
    this.isLoading = true

    const emailPromise = emailjs.send(
      'service_53133ah',
      'template_h7dffhj',
      {
        from_name: this.contactForm.value.name,
        from_phone: this.contactForm.value.mobileNum,
        message: this.contactForm.value.message,
      },
      'eqr4b6Ok0w49CgQvf'
    );
    from(emailPromise).subscribe({
      next: (result: EmailJSResponseStatus) => {
        this.isLoading = false
        this.toastr.success("Message sent! We’ll get back to you soon")
        this.contactForm.reset();
      },
      error: (error) => {
        console.error('FAILED...', error);
        this.toastr.error("Something went wrong, please try again.");
        this.contactForm.reset()
      },
    });
  }
}