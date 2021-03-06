import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Module } from 'src/app/_/interfaces/module.interface';
import { FileSystemService } from '../services/filesysystem.service';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  modules: Module[];
  constructor(){}
  ngOnInit(): void {
    FileSystemService.modules.subscribe(value=>{
      this.modules = value;
   });
  }
}
