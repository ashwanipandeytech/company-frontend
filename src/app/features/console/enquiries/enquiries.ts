import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { Enquiry } from '../../../core/models/api.model';

@Component({
  selector: 'dh-enquiries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enquiries.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Enquiries implements OnInit {
  private readonly apiService = inject(ApiService);
  
  enquiries = signal<Enquiry[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.loadEnquiries();
  }

  loadEnquiries() {
    this.loading.set(true);
    this.apiService.getAllEnquiries().subscribe({
      next: (res) => {
        this.enquiries.set(res.data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading enquiries', err);
        this.loading.set(false);
      }
    });
  }

  updateStatus(id: number, status: string) {
    this.apiService.updateEnquiryStatus(id, status).subscribe({
      next: () => {
        this.loadEnquiries();
      },
      error: (err) => console.error('Error updating status', err)
    });
  }
}
