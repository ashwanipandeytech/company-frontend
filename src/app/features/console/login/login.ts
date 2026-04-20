import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dh-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);
  private readonly platformId = inject(PLATFORM_ID);

  loading = signal(false);
  errorMessage = signal<string | null>(null);

  loginForm = this.fb.group({
    email: ['superadmin@demohandler.in', [Validators.required, Validators.email]],
    password: ['secret123@demo', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
    // If user already has a token, send them directly to enquiries
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('admin_token');
      if (token) {
        this.router.navigate(['/console-panel/enquiries']);
      }
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading.set(true);
      this.errorMessage.set(null);

      this.apiService.adminLogin(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log('FULL Login Response:', res);
          
          const token = res.token || res.data?.token || res.access_token;
          const user = res.user || res.data?.user;

          if (token && isPlatformBrowser(this.platformId)) {
            localStorage.setItem('admin_token', token);
            localStorage.setItem('admin_user', JSON.stringify(user || {}));
            this.toastr.success('Welcome back, Admin!', 'Login Successful');
            this.router.navigate(['/console-panel/enquiries']);
          } else if (!token) {
            this.toastr.error('Token not found in server response.', 'Login Error');
            this.errorMessage.set('Server response structure mismatch.');
          }
          this.loading.set(false);
        },
        error: (err) => {
          let message = 'Invalid credentials. Please try again.';
          if (err.status === 422 && err.error?.errors) {
            const errors = err.error.errors;
            message = Object.values(errors).flat().join(' ');
          }
          this.toastr.error(message, 'Login Failed');
          this.errorMessage.set(message);
          this.loading.set(false);
          console.error('Login error details:', err);
        }
      });
    }
  }
}
