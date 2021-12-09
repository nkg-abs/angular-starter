import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter.reducer';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let movieServiceSpy: jasmine.SpyObj<MoviesService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MoviesService', ['getAll']);
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports: [
        StoreModule.forRoot({ root: counterReducer }),
        HttpClientModule
      ],
      providers: [
        MoviesComponent,
        { provide: MoviesService, useValue: spy }
      ]
    })
    .compileComponents();
    movieServiceSpy = TestBed.inject(MoviesService) as jasmine.SpyObj<MoviesService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component and call movie services', () => {
    expect(component).toBeTruthy();
    expect(movieServiceSpy.getAll.calls.count()).toBe(1);
    expect(movieServiceSpy.getAll).toHaveBeenCalled();
  });
});
