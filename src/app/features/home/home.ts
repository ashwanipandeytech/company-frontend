import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemoService } from '../../core/services/demo.service';

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
}
