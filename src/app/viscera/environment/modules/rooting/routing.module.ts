import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppEntryComponent} from '../../../working-in/entry-c/entry.component';
import {AppHandlingComponent} from '../../../working-in/handling-c/handling.component';
import {AppSurveyComponent} from '../../../working-in/survey-c/survey.component';

const appRoutes: Routes =
  [
    {path: '', component: AppEntryComponent},
    {path: 'handle', component: AppHandlingComponent},
    {path: 'survey', component: AppSurveyComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
