import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todolist } from '../mock-todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {

  list = todolist; 
  constructor(private router: Router) { }

  ngOnInit() {
      
  }

  detailTodo(id: number) {
    console.log("Detail Todo!");
    let idItem = id;
    this.router.navigate(['/detail', idItem]);
  }
  
}
