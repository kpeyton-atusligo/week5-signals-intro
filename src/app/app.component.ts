import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MysignalService } from './mysignal.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week5-signals-intro';

  constructor(private signalservice:MysignalService) {}



  inc() {
    this.signalservice.increment();
  }

  dec() {
    this.signalservice.decrement();
  }

}
