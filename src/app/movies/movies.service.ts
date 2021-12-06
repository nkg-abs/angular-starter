import { Injectable  } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { StateManager } from "../core/statemanager.component";
@Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor (private http: HttpClient, private stateManager: StateManager) {}

    getAll() {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((movies) => {
        this.stateManager.actions.updateMovies(movies);
      })
    }
  }
