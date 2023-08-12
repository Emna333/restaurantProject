import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ChefComponent } from './components/chef/chef.component';
import { PlatComponent } from './components/plat/plat.component';
import { BannerComponent } from './components/banner/banner.component';
import { HistoryComponent } from './components/history/history.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BlogComponent } from './components/blog/blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChefsTableComponent } from './components/chefs-table/chefs-table.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PlatsTableComponent } from './components/plats-table/plats-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { UserComponent } from './components/user/user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddChefComponent,
    AddPlatComponent,
    ChefsComponent,
    PlatsComponent,
    ChefComponent,
    PlatComponent,
    BannerComponent,
    HistoryComponent,
    MenuComponent,
    ReservationComponent,
    BlogComponent,
    ChefsTableComponent,
    UsersTableComponent,
    PlatsTableComponent,
    AdminComponent,
    ChefInfoComponent,
    PlatInfoComponent,
    UserComponent,
    UserInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
