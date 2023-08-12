import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { PlatsComponent } from './components/plats/plats.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'chefs', component:ChefsComponent},
  {path:'plats', component:PlatsComponent},
  {path:'addChefs', component:AddChefComponent},
  {path:'addPlats', component:AddPlatComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'displayedChef/:id', component:ChefInfoComponent},
  {path:'admin', component:AdminComponent},
  {path:'displayedPlat/:id', component:PlatInfoComponent},
  {path:'displayedUser/:id', component:UserInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
