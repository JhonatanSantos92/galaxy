import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { InstructorsCreateView } from './views/instructors-create/instructors-create.view';
import { InstructorsUpdateView } from './views/instructors-update/instructors-update.view';

@NgModule({
  declarations: [
    AdminComponent,
    WorkshopsComponent,
    WorkshopCreateView,
    WorkshopUpdateView,
    InstructorsComponent,
    InstructorsCreateView,
    InstructorsUpdateView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
  ]
})
export class AdminModule { }
