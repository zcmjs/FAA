import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/Movie';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css']
})
export class MoviesInCategoryComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    //teraz param jest zwykłym obiektem, bo odwołaliśmy się przez snapshot (Pobieranie bez observable)
    //Niestety takie rozwiazanie jest słabe ponieważ przy zmianie adresu(klik button next na html) z category/comedy ie nastapi odswiezenie, bonie nastapi inicjalizacja(dlatego lepiej zastosować subscription)
    const category = this.route.snapshot.paramMap.get('category');
    this.movies = this.httpService.getMoviesFromCategory(category);

  }
}
