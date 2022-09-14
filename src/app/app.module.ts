import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { UserDataModule } from './user-settings/user-data/user-data.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingRoutingModule,
    UserSettingsModule,
    UserDataModule,
  ],
  declarations: [AppComponent, NavigationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
