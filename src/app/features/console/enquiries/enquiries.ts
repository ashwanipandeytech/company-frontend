import { Component, ChangeDetectionStrategy, signal, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { Enquiry } from '../../../core/models/api.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dh-enquiries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enquiries.html',
  styles: [`
    .admin-table-container {
      overflow: visible !important;
    }
    .custom-dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 9999 !important;
      min-width: 200px;
      padding: 0.5rem 0;
      margin: 0.25rem 0 0;
      background-color: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      list-style: none; /* Remove bullets */
    }
    .custom-dropdown-menu.show {
      display: block;
    }
    .dropdown-item {
      width: 100%;
      padding: 0.75rem 1.25rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #1e293b;
      text-align: left;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background-color 0.2s;
    }
    .dropdown-item:hover {
      background-color: #f1f5f9;
      color: var(--dh-orange);
    }
    /* Fixed Badge Colors for High Contrast - Forced Dark Text */
    .status-badge {
      font-weight: 700;
      font-size: 0.7rem;
      letter-spacing: 0.05em;
      color: #0f172a !important; /* Force dark slate color */
    }
    .status-pending { background-color: #fef3c7 !important; }
    .status-contacted { background-color: #e0f2fe !important; }
    .status-resolved { background-color: #dcfce7 !important; }
    .status-cancelled { background-color: #fee2e2 !important; }
    .status-new { background-color: #f1f5f9 !important; color: #475569 !important; }
    
    .detail-row {
      display: flex;
      margin-bottom: 1rem;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 0.5rem;
    }
    .detail-label {
      width: 150px;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #64748b;
    }
    .detail-value {
      flex: 1;
      color: #1e293b;
    }
    .reply-area {
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      padding: 1rem;
      width: 100%;
      min-height: 120px;
      font-size: 0.95rem;
      transition: border-color 0.2s;
      resize: vertical;
    }
    .reply-area:focus {
      outline: none;
      border-color: var(--dh-orange);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Enquiries implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly toastr = inject(ToastrService);
  
  enquiries = signal<Enquiry[]>([]);
  loading = signal(true);
  openDropdownId = signal<number | null>(null);
  selectedEnquiry = signal<Enquiry | null>(null);
  isDetailsModalOpen = signal(false);
  
  replyMessage = signal('');
  isSendingReply = signal(false);

  @HostListener('document:click')
  closeDropdown() {
    this.openDropdownId.set(null);
  }

  ngOnInit() {
    this.loadEnquiries();
  }

  loadEnquiries() {
    this.loading.set(true);
    this.apiService.getAllEnquiries().subscribe({
      next: (res: any) => {
        const enquiriesData = res.data || res;
        this.enquiries.set(Array.isArray(enquiriesData) ? enquiriesData : []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading enquiries', err);
        this.toastr.error('Failed to load enquiries.', 'Error');
        this.loading.set(false);
      }
    });
  }

  toggleDropdown(id: number, event: MouseEvent) {
    event.stopPropagation();
    if (this.openDropdownId() === id) {
      this.openDropdownId.set(null);
    } else {
      this.openDropdownId.set(id);
    }
  }

  viewDetails(enquiry: Enquiry) {
    this.selectedEnquiry.set(enquiry);
    this.replyMessage.set(''); // Reset reply on open
    this.isDetailsModalOpen.set(true);
  }

  closeDetailsModal() {
    this.isDetailsModalOpen.set(false);
    this.selectedEnquiry.set(null);
  }

  onReplyChange(event: any) {
    this.replyMessage.set(event.target.value);
  }

  sendReply() {
    const enquiry = this.selectedEnquiry();
    const message = this.replyMessage();
    
    if (enquiry && message.trim()) {
      this.isSendingReply.set(true);
      this.apiService.replyToEnquiry(enquiry.id, message).subscribe({
        next: () => {
          this.toastr.success('Your reply has been sent!', 'Success');
          this.isSendingReply.set(false);
          this.replyMessage.set('');
          this.loadEnquiries(); 
        },
        error: (err) => {
          console.error('Error sending reply', err);
          this.toastr.error('Failed to send reply.', 'Error');
          this.isSendingReply.set(false);
        }
      });
    }
  }

  updateStatus(id: number, status: string) {
    this.apiService.updateEnquiryStatus(id, status).subscribe({
      next: () => {
        this.toastr.success(`Status updated to ${status.toUpperCase()}`, 'Updated');
        this.loadEnquiries();
        this.openDropdownId.set(null);
      },
      error: (err) => {
        this.toastr.error('Failed to update status.', 'Error');
        console.error('Error updating status', err);
      }
    });
  }
}
