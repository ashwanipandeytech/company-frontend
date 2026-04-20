import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemoService } from '../../core/services/demo.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'dh-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private readonly demoService = inject(DemoService);
  protected readonly services = this.demoService.allServices;
  protected readonly team = this.demoService.allTeam;
  protected readonly clients = this.demoService.allClients;
  protected readonly projects = this.demoService.allProjects;

  constructor() {
    console.log('Home Component: projects signal value:', this.projects());
  }

  protected getImageUrl(path: string | undefined): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    
    // Clean the path: remove leading slashes and redundant 'storage/' prefix if it's already in the base URL
    let cleanPath = path.startsWith('/') ? path.substring(1) : path;
    if (cleanPath.startsWith('storage/')) {
      cleanPath = cleanPath.substring(8);
    }
    
    return `${environment.storageBaseUrl}/${cleanPath}`;
  }
}
