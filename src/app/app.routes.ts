import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MuseusComponent } from './museus/museus.component';
import { PacoDuquesComponent } from './paco-duques/paco-duques.component';
import { MafraComponent } from './mafra/mafra.component';
import { BiscainhosComponent } from './biscainhos/biscainhos.component';
import { DiogoSousaComponent } from './diogo-sousa/diogo-sousa.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'museus', component: MuseusComponent },
  { path: 'paco_duques', component: PacoDuquesComponent },
  { path: 'mafra', component: MafraComponent },
  { path: 'biscainhos', component: BiscainhosComponent },
  { path: 'diogo_sousa', component: DiogoSousaComponent },

];

