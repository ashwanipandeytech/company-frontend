import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dh-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {}
