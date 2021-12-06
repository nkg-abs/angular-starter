import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/lib/base.component';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends BaseComponent{
  override path: string = '/nested/date';
}
