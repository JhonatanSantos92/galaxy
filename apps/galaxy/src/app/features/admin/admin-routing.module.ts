import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'talleres'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'talleres', component: WorkshopsComponent },
      { path: 'talleres/nuevo', component: WorkshopCreateView },
      { path: 'talleres/actualizar/:id', component: WorkshopUpdateView },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
