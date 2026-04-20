import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dh-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  private readonly toastr = inject(ToastrService);

  isModalOpen = signal(false);
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

  openEnquiryModal() {
    this.isModalOpen.set(true);
    this.isSuccess.set(false);
    this.enquiryForm.reset({ project_type_id: 1 });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      this.isSubmitting.set(true);
      this.apiService.submitProjectEnquiry(this.enquiryForm.value as any).subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.isSuccess.set(true);
          this.toastr.success('Your enquiry has been submitted successfully!', 'Success');
        },
        error: (err) => {
          console.error('Enquiry submission error:', err);
          this.isSubmitting.set(false);
          this.toastr.error('Failed to submit enquiry. Please try again.', 'Error');
        }
      });
    } else {
      this.toastr.warning('Please fill in all required fields correctly.', 'Validation');
      this.enquiryForm.markAllAsTouched();
    }
  }
}
