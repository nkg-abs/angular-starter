import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter.reducer';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';
import { DebugElement } from '@angular/core';

class MockMoviesService {
  getAll() {}
}

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let getAllSpy: any;
  let debugElement: DebugElement;
  let movieService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports: [
        StoreModule.forRoot({ root: counterReducer }),
        HttpClientModule
      ],
      providers: [
        MoviesService,
        { provide: MoviesService, useClass: MockMoviesService }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MoviesComponent);
    debugElement = fixture.debugElement;
    movieService = debugElement.injector.get(MoviesService);
    getAllSpy = spyOn(movieService, 'getAll').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component and call movie services', () => {
    expect(component).toBeTruthy();
    expect(getAllSpy.calls.count()).toBe(1);
    expect(getAllSpy).toHaveBeenCalled();
  });
});
