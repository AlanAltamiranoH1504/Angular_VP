import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter-component/counter-component';
import { Hero } from './pages/hero/hero';

export const routes: Routes = [
    {path: "", component: CounterComponent},
    {path: "hero", component: Hero}
];
