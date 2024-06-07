import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MuseusComponent } from './museus/museus.component';
import { PacoDuquesComponent } from './paco-duques/paco-duques.component';
import { DDiogoSousaComponent } from './d.diogo-sousa/d.diogo-sousa.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'museus', component: MuseusComponent },
  { path: 'paco_duques', component: PacoDuquesComponent },
  { path: 'ddiogo_sousa', component: DDiogoSousaComponent },

];
