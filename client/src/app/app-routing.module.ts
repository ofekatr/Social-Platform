import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "login", component: LoginContainerComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
