import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data.component';
import { UserSubComponent } from './user-sub/user-sub.component';

const routes: Routes = [
 {
    path: ':id',
    children: [
      {
        path: 'data/:id',
        component: UserDataComponent,
        outlet: 'userdata',
        // works if router-oulet in UserDataComponent
        children: [
          {
            path: '',
            component: UserSubComponent,
            outlet: 'usersubdata'
          },
        ],
      },
      { // works if router-oulet in nav-component
        path: '',
        component: UserSubComponent,
        outlet: 'usersubdata',
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDataRoutingModule {}
