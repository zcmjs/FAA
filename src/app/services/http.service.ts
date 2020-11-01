import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('/api/movies');
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>('/api/movies/' + id);
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('/api/categories');
  }

  getMoviesFromCategory(category: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.category === category))
    );
  }

  // Wykorzystaj do zrobienia zadania
  getYears(): Observable<string[]> {
    return this.httpClient.get<string[]>('/api/years');
  }

  // Wykorzystaj do zrobienia zadania
  getMoviesFromYear(year: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year))
    );
  }
}
