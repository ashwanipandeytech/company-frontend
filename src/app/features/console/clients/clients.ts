import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Client } from '../../../core/models/api.model';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dh-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './clients.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Clients implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly fb = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  
  clients = signal<Client[]>([]);
  loading = signal(true);
  isModalOpen = signal(false);
  isDeleteModalOpen = signal(false);
  isEditing = signal(false);
  currentClientId = signal<number | null>(null);
  currentLogoUrl = signal<string | null>(null);
  selectedFilePreview = signal<string | null>(null);
  selectedFile: File | null = null;

  clientForm = this.fb.group({
    name: ['', Validators.required],
    website_url: ['', Validators.required],
    is_active: [true]
  });

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.loading.set(true);
    this.apiService.getAdminClients().subscribe({
      next: (res: any) => {
        const clientsData = res.data || res;
        this.clients.set(Array.isArray(clientsData) ? clientsData : []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading clients', err);
        this.toastr.error('Failed to load clients.', 'Error');
        this.loading.set(false);
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFilePreview.set(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  openAddModal() {
    this.isEditing.set(false);
    this.currentClientId.set(null);
    this.currentLogoUrl.set(null);
    this.selectedFilePreview.set(null);
    this.clientForm.reset({ is_active: true });
    this.selectedFile = null;
    this.isModalOpen.set(true);
  }

  openEditModal(client: Client) {
    this.isEditing.set(true);
    this.currentClientId.set(client.id);
    this.currentLogoUrl.set(this.getImageUrl(client.logo_url || client.logo));
    this.selectedFilePreview.set(null);
    this.clientForm.patchValue({
      name: client.name,
      website_url: client.website_url || (client as any).website,
      is_active: client.is_active ?? true
    });
    this.selectedFile = null;
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  protected getImageUrl(path: string | undefined): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    
    let cleanPath = path.startsWith('/') ? path.substring(1) : path;
    if (cleanPath.startsWith('storage/')) {
      cleanPath = cleanPath.substring(8);
    }
    
    return `${environment.storageBaseUrl}/${cleanPath}`;
  }

  onWebsiteBlur() {
    const control = this.clientForm.get('website_url');
    if (control?.value) {
      control.setValue(this.formatUrl(control.value));
    }
  }

  private formatUrl(url: string | null | undefined): string {
    if (!url) return '';
    let trimmed = url.trim();
    if (!/^https?:\/\//i.test(trimmed)) {
      return `https://${trimmed}`;
    }
    return trimmed;
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const formattedUrl = this.formatUrl(this.clientForm.get('website_url')?.value);
      const formData = new FormData();
      formData.append('name', this.clientForm.get('name')?.value || '');
      formData.append('website_url', formattedUrl);
      formData.append('website', formattedUrl); // Fallback field
      formData.append('is_active', this.clientForm.get('is_active')?.value ? '1' : '0');
      
      if (this.selectedFile) {
        formData.append('logo', this.selectedFile);
      }

      if (this.isEditing()) {
        console.log('Updating client with ID:', this.currentClientId());
        this.apiService.updateClient(this.currentClientId()!, formData).subscribe({
          next: () => {
            this.toastr.success('Client updated successfully!', 'Success');
            this.loadClients();
            this.closeModal();
          },
          error: (err) => {
            const msg = err.error?.message || 'Failed to update client.';
            this.toastr.error(msg, 'Error');
            console.error('Update client error:', err);
          }
        });
      } else {
        this.apiService.createClient(formData).subscribe({
          next: () => {
            this.toastr.success('Client created successfully!', 'Success');
            this.loadClients();
            this.closeModal();
          },
          error: (err) => {
            const msg = err.error?.message || 'Failed to create client.';
            this.toastr.error(msg, 'Error');
            console.error('Create client error:', err);
          }
        });
      }
    }
  }

  openDeleteModal(id: number) {
    this.currentClientId.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.currentClientId.set(null);
  }

  confirmDelete() {
    const id = this.currentClientId();
    if (id) {
      this.apiService.deleteClient(id).subscribe({
        next: () => {
          this.toastr.success('Client deleted successfully!', 'Deleted');
          this.loadClients();
          this.closeDeleteModal();
        },
        error: (err) => {
          this.toastr.error('Failed to delete client.', 'Error');
          console.error('Delete client error:', err);
        }
      });
    }
  }
}
