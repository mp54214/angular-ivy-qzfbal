import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

const routes: Routes = [
  {
        path: 'settings',
        component:  UserSettingsComponent,
        children: [
            {
                path:  'profile',
                component: UserProfileComponent
            }
        ]
    },
    {
      path: '', component: UserHomeComponent
    },
    {
      path: '', component: BannerComponent, outlet: 'banner-outlet'
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }