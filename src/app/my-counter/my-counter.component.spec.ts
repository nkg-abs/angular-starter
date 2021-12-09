import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCounterComponent } from './my-counter.component';
import { config } from '../config';
import { seed } from '../core/seed';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  beforeEach(async () => {
    //TODO: import app module directly
    await TestBed.configureTestingModule(config);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('perform increment', () => {
    expect(component.data).toEqual(seed.count);

    component.increment();

    expect(component.data).toEqual(seed.count + seed.value);
  });
});
