import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SimpleFormComponent} from './01-simple-form/simple-form.component';
import {TemplateDrivenFormComponent} from './02-template-driven-form/template-driven-form.component';
import {ReactiveFormComponent} from './03-reactive-form/reactive-form.component';
import {DynamicFormComponent} from './04-dynamic-form/dynamic-form-component';


const formsRoutes: Routes = [

  {path: 'simple-form', component: SimpleFormComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'dynamic-form', component: DynamicFormComponent},

];

// export const routing: ModuleWithProviders = RouterModule.forChild(formsRoutes);

@NgModule({
  imports: [
    RouterModule.forChild(formsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormsRoutingModule { }
