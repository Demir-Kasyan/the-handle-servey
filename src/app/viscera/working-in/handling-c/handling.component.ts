import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handling-component',
  templateUrl: './handling.component.html',
  styleUrls: ['./handling.component.css']
})
export class AppHandlingComponent implements OnInit {
  constructor(){
  }
  ngOnInit(): void {
    console.log('handle');

  }
}
