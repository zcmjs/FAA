import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { AddMovieComponent } from './pages/movies/add-movie/add-movie.component';

const routes: Routes = [
  //zamiast wpisywac nazwe komponetu, lepiej zrobic redirect
  //pathMatch ma 2 parametry prefix i full. Gdy wybierzemy prefix to dowolny ciąg znaków będzie do niego pasowaćæć ponieważ pomiędzy / a movies jest znak pustośćui(Przez co można wpisać dowlony ciąg znaków)
  //W przypadku full, musi być jasno okrslone, że chodzi o ''(pusty znak)
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'add-movie', component: AddMovieComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:category', component: MoviesInCategoryComponent},
  {path: '**', component: PageNotFoundComponent}
];


//RouterModule.forRoot(), może zostac użyta tylko raz w całej aplikacji. Tą metodą inicjalizujemy głowny routing w naszej aplikacji.
//Pozostały moduły inicjalizujemy forChild
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
