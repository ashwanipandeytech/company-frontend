import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'dh-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);

  loading = signal(false);
  errorMessage = signal<string | null>(null);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading.set(true);
      this.errorMessage.set(null);

      this.apiService.adminLogin(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('admin_token', res.token);
          localStorage.setItem('admin_user', JSON.stringify(res.user));
          this.router.navigate(['/console-panel/enquiries']);
          this.loading.set(false);
        },
        error: (err) => {
          let message = 'Invalid credentials. Please try again.';
          if (err.status === 422 && err.error?.errors) {
            // Extract Laravel validation errors if present
            const errors = err.error.errors;
            message = Object.values(errors).flat().join(' ');
          }
          this.errorMessage.set(message);
          this.loading.set(false);
          console.error('Login error details:', err);
        }
      });
    }
  }
}
