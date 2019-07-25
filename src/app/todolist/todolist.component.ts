import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todolist } from '../mock-todo';
import { ModalController } from '@ionic/angular';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {

  list = todolist; 
  constructor(private router: Router, public modalCtrl: ModalController) { }

  ngOnInit() {
      
  }

  detailTodo(id: number) {
    console.log("Detail Todo!");
    let idItem = id;
    this.router.navigate(['/detail', idItem]);
  }
  
  async editModal(id: number) {
    console.log(id);
    if( id != null) {
      const modal = await this.modalCtrl.create({
        component: ModalTemplateComponent,
        componentProps: {
          "typeModal": {
            "title": "editTodo",
            "paramsInput": {
              "id": id
            }, 
            "name": "Edit Todo",
            "subTitle": "Edit todo's name",
            "btnCancel": "Cancel",
            "btnSubmit": "Save",
            "hasFooter": "false"
          }
        }
      });
      return await modal.present();
    } else {
      console.log("id null");
    }
    
  }
  async addModal() {
    const modal = await this.modalCtrl.create({
      component: ModalTemplateComponent,
      componentProps: {
        "typeModal": {
          "title": "addTodo",
          "paramsInput": {"id" : null},
          "name": "New Todo",
          "subTitle": "Enter todo's name",
          "btnCancel": "Cancel",
          "btnSubmit": "Save",
          "hasFooter": "false"
        }
      }
    });
    return await modal.present();
  }

  async deleteModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: ModalTemplateComponent,
      componentProps: {
        "typeModal": {
          "title": "deleteTodo",
          "paramsInput": {
            "id": id
          }, 
          "name": "Confirmation",
          "subTitle": "Are you sure delete this item?",
          "btnCancel": "Cancel",
          "btnSubmit": "OK",
          "hasFooter": "false"
        }
      }
    });
    return await modal.present();
  }
}
