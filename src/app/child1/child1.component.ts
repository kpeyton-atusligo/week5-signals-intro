import { Component } from '@angular/core';
import { MysignalService } from '../mysignal.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  constructor(private signalservice:MysignalService) {}

  getCount() {
    return this.signalservice.getCount();
  }

}
