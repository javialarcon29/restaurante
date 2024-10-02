import { Routes } from '@angular/router';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ChefComponent } from './chef/chef.component';
import { MenuComponent } from './menu/menu.component';
import { EmailFormComponent } from './email-form.component/email-form.component.component';


export const routes: Routes = [
  { path: '', component: RestauranteComponent },  // Ruta principal (página del restaurante)
  { path: 'restaurante', component: RestauranteComponent }, // Ruta para la página de reservas
  { path: 'chef', component: ChefComponent }, // Ruta para la página de reservas
  { path: 'menu', component: MenuComponent }, // Ruta para la página de reservas
  { path: 'reservas', component: EmailFormComponent } // Ruta para la página de reservas
  

];
