import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Project } from '../../../core/models/api.model';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dh-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly fb = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  
  projects = signal<Project[]>([]);
  loading = signal(true);
  isModalOpen = signal(false);
  isDeleteModalOpen = signal(false);
  isEditing = signal(false);
  currentProjectId = signal<number | null>(null);
  currentThumbnailUrl = signal<string | null>(null);
  selectedFilePreview = signal<string | null>(null);
  selectedFile: File | null = null;

  projectForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: ['completed', Validators.required]
  });

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loading.set(true);
    this.apiService.getAdminProjects().subscribe({
      next: (res: any) => {
        const projectsData = res.data || res;
        this.projects.set(Array.isArray(projectsData) ? projectsData : []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading projects', err);
        this.toastr.error('Failed to load projects.', 'Error');
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
    this.currentProjectId.set(null);
    this.currentThumbnailUrl.set(null);
    this.selectedFilePreview.set(null);
    this.projectForm.reset({ status: 'completed' });
    this.selectedFile = null;
    this.isModalOpen.set(true);
  }

  openEditModal(project: Project) {
    this.isEditing.set(true);
    this.currentProjectId.set(project.id);
    this.currentThumbnailUrl.set(this.getImageUrl(project.thumbnail || project.thumbnail_url));
    this.selectedFilePreview.set(null);
    this.projectForm.patchValue({
      title: project.title,
      description: project.description,
      status: project.status
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

  onSubmit() {
    if (this.projectForm.valid) {
      const formData = new FormData();
      formData.append('title', this.projectForm.get('title')?.value || '');
      formData.append('description', this.projectForm.get('description')?.value || '');
      formData.append('status', this.projectForm.get('status')?.value || 'completed');
      
      if (this.selectedFile) {
        formData.append('thumbnail', this.selectedFile);
      }

      if (this.isEditing()) {
        this.apiService.updateProject(this.currentProjectId()!, formData).subscribe({
          next: () => {
            this.toastr.success('Project updated successfully!', 'Success');
            this.loadProjects();
            this.closeModal();
          },
          error: (err) => {
            const msg = err.error?.message || 'Failed to update project.';
            this.toastr.error(msg, 'Error');
            console.error('Error updating project', err);
          }
        });
      } else {
        this.apiService.createProject(formData).subscribe({
          next: () => {
            this.toastr.success('Project created successfully!', 'Success');
            this.loadProjects();
            this.closeModal();
          },
          error: (err) => {
            const msg = err.error?.message || 'Failed to create project.';
            this.toastr.error(msg, 'Error');
            console.error('Error creating project', err);
          }
        });
      }
    }
  }

  openDeleteModal(id: number) {
    this.currentProjectId.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.currentProjectId.set(null);
  }

  confirmDelete() {
    const id = this.currentProjectId();
    if (id) {
      this.apiService.deleteProject(id).subscribe({
        next: () => {
          this.toastr.success('Project deleted successfully!', 'Deleted');
          this.loadProjects();
          this.closeDeleteModal();
        },
        error: (err) => {
          this.toastr.error('Failed to delete project.', 'Error');
          console.error('Error deleting project', err);
        }
      });
    }
  }
}
