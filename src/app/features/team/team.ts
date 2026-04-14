import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DemoService } from '../../core/services/demo.service';

@Component({
  selector: 'dh-team',
  standalone: true,
  templateUrl: './team.html',
  styleUrl: './team.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Team {
  protected readonly team = inject(DemoService).allTeam;
}
