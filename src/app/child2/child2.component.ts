import { Component } from '@angular/core';
import { MysignalService } from '../mysignal.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  constructor(private signalservice:MysignalService) {}

  getDoubleCount() {
    return this.signalservice.doubleCount();
  }
}
