import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';
import { DetailTodolistComponent } from './detail-todolist/detail-todolist.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ModalTemplateComponent,
    DetailTodolistComponent,
    ProfileManagementComponent
  ],
  entryComponents: [
    TodolistComponent,
    ModalTemplateComponent,
    DetailTodolistComponent,
    ProfileManagementComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
