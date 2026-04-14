import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DemoService } from '../../core/services/demo.service';

@Component({
  selector: 'dh-faq',
  standalone: true,
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Faq {
  protected readonly faqs = inject(DemoService).allFaqs;
}
