import { Injectable  } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Context } from "../core/lib/context";

@Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor (private http: HttpClient, private context: Context) {}

    getAll() {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((movies) => {
        this.context.actions.updateMovies(movies);
      })
    }
  }
