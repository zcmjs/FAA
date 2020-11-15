import {Component, OnInit} from '@angular/core';
import {Movie} from 'src/app/model/Movie';
import {NgForm, NgModel} from '@angular/forms';
import {HttpService} from 'src/app/services/http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  //JEśli go nie zainnicjalizujemy, to wystąpi błąd przy próbie bindowania
  model: Partial<Movie> = {};

  categories: string[] = [];
  years: string[] = [];

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    //gdybyśmy chceili zainicjalozować tylko tytuł, to było by nie możliwe, bo wszystkie pola z Movie są obowiażkoiwe
    // this.model = {title: 'Jakis film'};

    this.httpService.getCategories().subscribe(categories => this.categories = categories);
    this.httpService.getYears().subscribe(years => this.years = years);
  }

  printModel(title: NgModel) {
    //Tu warto zwrocic uwage na pola valid, errors, dirty
    console.log(title);
  }

  send() {
    console.log(this.model);
    this.httpService.saveMovie(this.model as Movie).subscribe(
      movie => console.log(movie),
      err => console.log(err)
    );
  }

}
