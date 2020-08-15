import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'userinfo', component: UserinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
