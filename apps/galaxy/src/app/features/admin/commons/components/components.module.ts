import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { WorkshopsTableComponent } from './workshops-table/workshops-table.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { WorkshopFormComponent } from './workshop-form/workshop-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkshopDeleteModalComponent } from './workshop-delete-modal/workshop-delete-modal.component';
import { WorkshopUploadPosterComponent } from './workshop-upload-poster/workshop-upload-poster.component';
import { GlxDefaultImgPipeModule } from '@galaxy/commons/pipe';
import { GlxInputFileModule } from '@galaxy/commons/components';

const COMPONENTS = [
  MenuComponent,
  WorkshopsTableComponent,
  PageTitleComponent,
  WorkshopFormComponent,
  WorkshopDeleteModalComponent,
  WorkshopUploadPosterComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    GlxDefaultImgPipeModule,
    GlxInputFileModule
  ]
})
export class ComponentsModule { }
