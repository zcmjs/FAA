import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/Movie';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie>;

  constructor(private http: HttpService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    //tutaj zastosowano fajny trik, przełanaczania (z observable map na http) że zwracana jest wartość Observable<Movie> a nie observable paramMap
    //Dodatkjowo switchMap jeśli wykryję, że zmieniło się id to usunię stare http i zastapi nowym (pod warunkiem że stare http sie jeszcze nie skońćzyło)
    this.movieDetails = this.route.paramMap.pipe(
      //params.get('id') wyciągniecie parameteru z routingu
      switchMap((params: ParamMap) => this.http.getMovie(params.get('id')))
    )
  }

  goToMovies() {
    // this.router.navigate(['/movies']);
    this.location.back();
  }

// - przy redirectTo musimy ustawić właściwość match
//
// - prefix oznacza ze routing sprawdza część url przed ścieżką
//
// - full oznacza dokładne dopasowanie
//
// - ActivatedRoute to serwis, który zawiera informacje o ścieżce, która kieruje do danego komponentu
//
// - ParamMap możemy pobrać jako Observable albo jako zwykły obiekt z obiektu snapshot w ActivatedRoute
//
// - oprócz routerLink możemy użyć metody navigate z serwisu Router. Serwis ten służy do nawigacji po routingu.
//
// - serwis location może nam posłużyć do poruszania się pomiędzy odwiedzanymi stronami.

}
