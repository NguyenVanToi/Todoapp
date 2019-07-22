import { Component, OnInit, Input } from '@angular/core';
import { todolist } from '../mock-todo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-todolist',
  templateUrl: './detail-todolist.component.html',
  styleUrls: ['./detail-todolist.component.scss'],
})
export class DetailTodolistComponent implements OnInit {

  list = todolist;
  item: object;
  itemdemo = {
    "id": 1,
    'title': 'Todo 1 title',
    'sub_title': 'Note 1 summary',
    'description': '...',
    'icon_detail': 'play',
    'icon_edit': 'create',
    'icon_delete': 'close'
  }
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.item = this.list.find(x => x.id == id);
      console.log(typeof(this.item));
      console.log(this.item['title']);
      //TODO: get item from todolist
    })
  }

}
