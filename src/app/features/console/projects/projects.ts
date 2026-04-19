import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Project } from '../../../core/models/api.model';

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
  
  projects = signal<Project[]>([]);
  loading = signal(true);
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentProjectId = signal<number | null>(null);
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
      next: (res) => {
        this.projects.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading projects', err);
        this.loading.set(false);
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  openAddModal() {
    this.isEditing.set(false);
    this.currentProjectId.set(null);
    this.projectForm.reset({ status: 'completed' });
    this.selectedFile = null;
    this.isModalOpen.set(true);
  }

  openEditModal(project: Project) {
    this.isEditing.set(true);
    this.currentProjectId.set(project.id);
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

  onSubmit() {
    if (this.projectForm.valid) {
      if (this.isEditing()) {
        this.apiService.updateProject(this.currentProjectId()!, this.projectForm.value as any).subscribe({
          next: () => {
            this.loadProjects();
            this.closeModal();
          },
          error: (err) => console.error('Error updating project', err)
        });
      } else {
        const formData = new FormData();
        formData.append('title', this.projectForm.get('title')?.value || '');
        formData.append('description', this.projectForm.get('description')?.value || '');
        formData.append('status', this.projectForm.get('status')?.value || 'completed');
        if (this.selectedFile) {
          formData.append('thumbnail', this.selectedFile);
        }

        this.apiService.createProject(formData).subscribe({
          next: () => {
            this.loadProjects();
            this.closeModal();
          },
          error: (err) => console.error('Error creating project', err)
        });
      }
    }
  }

  deleteProject(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.apiService.deleteProject(id).subscribe({
        next: () => this.loadProjects(),
        error: (err) => console.error('Error deleting project', err)
      });
    }
  }
}
