import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {

  todolist = [
    {
      'title': 'Todo 1 title',
      'sub_title': 'Newest note summary',
      'description': '...',
      'icon_detail': 'play',
      'icon_edit': 'create',
      'icon_delete': 'close'
    },
    {
      'title': 'Todo 2 title',
      'sub_title': 'Newest note summary',
      'description': '...',
      'icon_detail': 'play',
      'icon_edit': 'create',
      'icon_delete': 'close'
    },
    {
      'title': 'Todo 3 title',
      'sub_title': 'Newest note summary',
      'description': '...',
      'icon_detail': 'play',
      'icon_edit': 'create',
      'icon_delete': 'close'
    }
  ]; 
  constructor() { }

  ngOnInit() {
      
  }
  
}
