import { RouterModule, Routes } from '@angular/router';

// Main Routes
import { NARAH_ROUTES } from './pages/narah/narah.routes';

import { NarahComponent } from './pages/narah/narah.component';
import { PuntoventaComponent } from './pages/puntoventa/puntoventa.component';


const APP_ROUTES: Routes = [
    { path: '', component: NarahComponent },
    { path: 'puntoventa', component: PuntoventaComponent },
    // {
    //     path: 'narahh',
    //     component: NarahComponent,
    //     children: NARAH_ROUTES
    // },
    { path: '**', pathMatch: 'full', redirectTo: '' }

]

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );