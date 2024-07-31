import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavBarComponent } from './property/nav-bar/nav-bar.component';
import { HousingService } from './housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {  Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes:Routes=[
  {
    path:'',component:PropertyListComponent},
   { path:'add-property',component:AddPropertyComponent},
   { path:'property-detail/:id',component:PropertyDetailComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
