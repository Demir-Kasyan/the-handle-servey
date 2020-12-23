import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AppDialogComponent} from '../dialog-c/dialog.component';

@Component({
  selector: 'app-router-component',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class AppRouterComponent implements OnInit {
  private updateMessage = `
    <mat-card class="main-card">
    <mat-card-subtitle>v.0.0.1a</mat-card-subtitle>
    <mat-card-title>The HandleSurvey ~ THS</mat-card-title>
    <mat-card-content>
    <p>
      "Write a piece that can show the schedule at the department" - at first glance, a simple task that can be solved in a couple of days, but is it worth it? Should I write "fuck off" or code that can show all the coolness of our team? I think the second is much better. Well then, forward to the abstraction of the problem!
      <br>      <br>
      The application is designed to create various blocks of information, their animation transitions, customization, editing.
      That is, you could just quickly do your job and relax. But why do we need this? :)
      <br>      <br>
      Each block of information accepts a variety of types and api, editing sizes, screen space, colors and this allows you to create unique content for the client. Full-scale customization of the application for the operator, as well as constant updating and adding new features! We will be glad to receive an estimate from you on the github.
      <br>      <br>
    </p>
    <p style="text-align: right">Best regards, the HandleSurvey development team.</p>
    </mat-card-content>
    </mat-card>`;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dialog.open(AppDialogComponent, {
      width: '50%',
      data: this.updateMessage
    });
  }
}
