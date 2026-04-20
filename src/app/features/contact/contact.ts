import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ToastrService } from 'ngx-toastr';

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
  private readonly toastr = inject(ToastrService);
  
  isSubmitting = signal(false);
  isSuccess = signal(false);

  enquiryForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+ \-()]{8,15}$/)]],
    company_name: ['', Validators.required],
    project_type_id: [1, Validators.required],
    budget_estimation: ['', Validators.required],
    estimated_timeline: ['', Validators.required],
    requirements: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.enquiryForm.valid) {
      this.isSubmitting.set(true);
      this.apiService.submitProjectEnquiry(this.enquiryForm.value as any).subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.isSuccess.set(true);
          this.toastr.success('Your project enquiry has been sent!', 'Success');
        },
        error: (err) => {
          console.error('Enquiry submission error:', err);
          this.isSubmitting.set(false);
          this.toastr.error('Submission failed. Please try again.', 'Error');
        }
      });
    } else {
      this.toastr.warning('Please check the form for errors.', 'Validation');
      this.enquiryForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.isSuccess.set(false);
    this.enquiryForm.reset({ project_type_id: 1 });
  }
}
