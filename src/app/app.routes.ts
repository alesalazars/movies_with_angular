import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FichaComponent } from './ficha/ficha.component';

const rutas:Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'ficha/:id', component:FichaComponent}
]

export const ROUTES_APP = RouterModule.forRoot(rutas);