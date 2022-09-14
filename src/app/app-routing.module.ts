import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UserSettingsModule } from './user-settings/user-settings.module';

const routes: Routes = [
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  {
    path: 'user',
    // outlet: 'userdata',
    loadChildren: () =>
      import('./user-settings/user-data/user-data.module').then(
        (m) => m.UserDataModule
      ),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [CommonModule, UserSettingsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
