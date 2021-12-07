import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/lib/base.component';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent extends BaseComponent {

  override path: string = '/value';

  updateValue(event: any) {
    this.actions.updateValue(Number(event.target.value));
  }
}
