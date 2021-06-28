import { Routes } from '@angular/router';
import { PuntoventaComponent } from '../puntoventa/puntoventa.component';

export const NARAH_ROUTES: Routes = [
    { path: 'PuntoVenta', component: PuntoventaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'PuntoVenta' }
]