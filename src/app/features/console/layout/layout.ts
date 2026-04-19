import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'dh-console-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout.html',
  styles: [`
    .sidebar { width: 260px; height: 100vh; position: fixed; left: 0; top: 0; background: #0f172a; color: white; }
    .main-content { margin-left: 260px; min-height: 100vh; background: #f8fafc; }
    .nav-link { color: #94a3b8; border-radius: 8px; margin: 4px 16px; transition: all 0.2s; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.05); }
    .nav-link.active { color: white; background: var(--dh-orange); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsoleLayout {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    }
    this.router.navigate(['/console-panel/login']);
  }
}
