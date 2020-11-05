import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MovieCoverComponent, CategoriesComponent, MoviesInCategoryComponent, PageNotFoundComponent, MoviesComponent, MovieDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//FormsModule jest potrzebne aby używać ngModel
//NGModel to połączenie eventBinding i PropertyBinding
