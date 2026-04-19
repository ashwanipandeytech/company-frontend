import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Client } from '../../../core/models/api.model';

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
  
  clients = signal<Client[]>([]);
  loading = signal(true);
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentClientId = signal<number | null>(null);
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
      next: (res) => {
        this.clients.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading clients', err);
        this.loading.set(false);
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  openAddModal() {
    this.isEditing.set(false);
    this.currentClientId.set(null);
    this.clientForm.reset({ is_active: true });
    this.selectedFile = null;
    this.isModalOpen.set(true);
  }

  openEditModal(client: Client) {
    this.isEditing.set(true);
    this.currentClientId.set(client.id);
    this.clientForm.patchValue({
      name: client.name,
      website_url: client.website_url,
      is_active: client.is_active ?? true
    });
    this.selectedFile = null;
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    if (this.clientForm.valid) {
      if (this.isEditing()) {
        this.apiService.updateClient(this.currentClientId()!, this.clientForm.value as any).subscribe({
          next: () => {
            this.loadClients();
            this.closeModal();
          },
          error: (err) => console.error('Error updating client', err)
        });
      } else {
        const formData = new FormData();
        formData.append('name', this.clientForm.get('name')?.value || '');
        formData.append('website_url', this.clientForm.get('website_url')?.value || '');
        formData.append('is_active', this.clientForm.get('is_active')?.value ? '1' : '0');
        if (this.selectedFile) {
          formData.append('logo', this.selectedFile);
        }

        this.apiService.createClient(formData).subscribe({
          next: () => {
            this.loadClients();
            this.closeModal();
          },
          error: (err) => console.error('Error creating client', err)
        });
      }
    }
  }

  deleteClient(id: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.apiService.deleteClient(id).subscribe({
        next: () => this.loadClients(),
        error: (err) => console.error('Error deleting client', err)
      });
    }
  }
}
