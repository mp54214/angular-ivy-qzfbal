import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsRoutingModule } from './user-settings-routing-module';
import { UserSettingsComponent } from './user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [ UserSettingsComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserSettingsRoutingModule
  ],
})
export class UserSettingsModule { }