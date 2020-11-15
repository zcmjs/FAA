import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Movie} from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  saveMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>('/api/movies', movie);
  }

  getMovies(): Observable<Movie[]> {
    //Operator tap nie ingeruję w obiekt przechodzący przez obserwable. Można go wykorzystac w debagowania
    return this.httpClient.get<Movie[]>('/api/movies').pipe(tap(console.log));
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>('/api/movies/' + id);
  }

  getFullResponseMovies(): Observable<HttpResponse<Movie[]>> {
    //Infoirmujemy, że chcemy cały obiekt response a nie tylko jego odpowiedź
    //Odpowiedz zwraca pełnego opakowanego respona. W body znajduje sie odpowiedź
    return this.httpClient.get<HttpResponse<Movie[]>>('/api/movies', {observe: 'response'}).pipe(tap(console.log));
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

  patchMovie(movie: Partial<Movie>) {
    return this.httpClient
      .patch<Movie>('/api/movies/' + movie.id, movie)
      .pipe(tap(console.log));
  }

  // Wykorzystaj do zrobienia zadania
  getMoviesFromYear(year: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year))
    );
  }

  //Metoda put aktualiozuje ały obiekt a metoda patch już nie musi robic całego

//  -------------------------------------------------------------------------

  headers(): Observable<HttpResponse<Movie[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/json',
      'X-Custom-Header': 'zacznij_programowac',
    });
    return this.httpClient
      .get<Movie[]>('/api/movies/', {observe: 'response', headers: myHeaders})
      //headers.get pobranie wartości z danego nagłówka
      .pipe(
        tap((res: HttpResponse<Movie[]>) => {
          console.log(res.headers.keys());
          console.log(res.headers.get('Cache-Control'));
          console.log(res.headers.get('Content-Type'));
          console.log(res.headers.get('Expires'));
          console.log(res.headers.get('Pragma'));
        })
      );
  }

}
