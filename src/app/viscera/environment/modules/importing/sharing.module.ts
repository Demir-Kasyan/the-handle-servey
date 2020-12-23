import {NgModule} from '@angular/core';
import {AppHandlingComponent} from '../../../working-in/handling-c/handling.component';
import {AppSurveyComponent} from '../../../working-in/survey-c/survey.component';
import {AppEntryComponent} from '../../../working-in/entry-c/entry.component';
import {MaterialModule} from '../design/material.design';
import {AppDialogComponent} from '../../components/dialog-c/dialog.component';
import {ClearHtmlPipe} from '../../pipes/html-p/clear.html.pipe';
import {RoutingModule} from "../rooting/routing.module";


@NgModule({
  imports: [
    MaterialModule,
    RoutingModule
  ],
  declarations: [
    AppHandlingComponent, AppSurveyComponent, AppEntryComponent, AppDialogComponent, ClearHtmlPipe
  ],
  exports: [
    AppHandlingComponent, AppSurveyComponent, AppEntryComponent, AppDialogComponent, ClearHtmlPipe
  ]
})
export class SharingModule {
}

