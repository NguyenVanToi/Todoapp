import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { todolist } from '../mock-todo';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class ModalTemplateComponent implements OnInit {

  modalTemplate : any;
  email: string;
  nameTodo: string;
  newName: string;
  @Input() typeModal: object;
  constructor(private modalCtrl: ModalController, public modalParams: NavParams) {
    this.modalTemplate = this.modalParams.get("typeModal");
    console.log(this.modalTemplate);
  }

  

  ngOnInit() {
    let hasFooter = this.modalTemplate.hasFooter;
  }
  
  async sendEmail() {
    console.log(this.email);
    this.modalCodeReceived();
  }
  async modalCodeReceived() {
    const modal = await this.modalCtrl.create({
      component: ModalTemplateComponent,
      componentProps: {
        "typeModal": { 
          "title": "resetPassword",
          "name": "Reset Password",
          "subTitle": "A verify code was sent to your mail. Please check your mail inbox to got its",
          "btnCancel": "false",
          "btnSubmit": "Submit",
          "hasFooter": "false"
        }
      }
    });
    return await modal.present();
  }

  addTodo() {
    let name = this.nameTodo;
    let idLast = todolist[todolist.length - 1].id;
    let todoElement = {
      "id": idLast + 1,
      'title': name,
      'sub_title': 'Newest note summary',
      'description': '...',
      'icon_detail': 'play',
      'icon_edit': 'create',
      'icon_delete': 'close'
    }
    todolist.push(todoElement);
    console.log("Add success!");
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  editTodo() {
    let name = this.newName;
    console.log(this.modalTemplate.paramsInput.id);
    if ( this.modalTemplate.paramsInput.id != null) {
      let id = this.modalTemplate.paramsInput.id;
      todolist[id - 1]['title'] = name;
      console.log('Edit success!');
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
  }

  deleteTodo() {
    if (this.modalTemplate.paramsInput.id) {
      let id = this.modalTemplate.paramsInput.id;
      let index = todolist.findIndex(x => x.id == id);
      console.log(index);
      todolist.splice(index, 1);
      console.log('Delete success!');
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
