import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { InstructorsCreateView } from './views/instructors-create/instructors-create.view';
import { InstructorsUpdateView } from './views/instructors-update/instructors-update.view';

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
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'instructores', component: InstructorsComponent },
      { path: 'instructores/nuevo', component: InstructorsCreateView },
      { path: 'instructores/actualizar/:id', component: InstructorsUpdateView },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
