import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { GlxWorkshopsHttpModule } from '@galaxy/commons/http/workshop';
import { GlxInstructorHttpModule } from '@galaxy/commons/http/instructor';
import { GlxErrorsInterceptorModule } from '@galaxy/commons/interceptors';

@NgModule({
  exports: [
    UiModule,
    ComponentsModule,
    HttpModule,

    GlxWorkshopsHttpModule,
    GlxInstructorHttpModule,
    GlxErrorsInterceptorModule
  ],
})
export class AdminCommonsModule { }
