import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ContactPayload } from '../../core/models/api.model';

@Component({
  selector: 'dh-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  
  submitted = signal(false);
  loading = signal(false);
  errorMessage = signal<string | null>(null);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['General Inquiry'], // Added subject as per api.md
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading.set(true);
      this.errorMessage.set(null);
      
      const payload = this.contactForm.value as ContactPayload;
      
      this.apiService.submitContactForm(payload).subscribe({
        next: (response) => {
          this.submitted.set(true);
          this.loading.set(false);
        },
        error: (error) => {
          this.errorMessage.set('There was an error submitting the form. Please try again later.');
          this.loading.set(false);
          console.error('Contact submission error:', error);
        }
      });
    }
  }
}
