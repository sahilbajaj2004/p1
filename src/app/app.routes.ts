import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './pages/error/error.component';
import { LoginformComponent } from './pages/loginform/loginform.component';

export const routes: Routes = [
 {
  path:'',
  component:HomeComponent
 },
 {
  path:"home",
  component:HomeComponent
 },
    {
      path:"about",
      component:AboutComponent
    },
    {
      path:"contact",
      component:ContactComponent
    },
    {
      path:"services",
      component:ServicesComponent
    },
    {
      path:"login",
      component:LoginformComponent
    },
    {
      path:"**",
      component:ErrorComponent
    }

];
