import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dh-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  constructor(){
    console.log('App Component Constructor: live deployed at 2026-04-19');
  }

  ngOnInit(){
    console.log('App Component OnInit: live deployed at 2026-04-19');
  }
}
