import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserSubComponent } from './user-sub/user-sub.component';
import { UserDataComponent } from './user-data.component';

@NgModule({
  imports: [
    CommonModule,
    UserDataRoutingModule
  ],
  declarations: [UserDataComponent, UserSubComponent],
})
export class UserDataModule { }