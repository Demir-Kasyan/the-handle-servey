import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-component',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class AppSurveyComponent implements OnInit {
  constructor(){
  }
  ngOnInit(): void {
    console.log('survey');

  }
}
