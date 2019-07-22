import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TodolistComponent } from '../todolist/todolist.component';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public modalController: ModalController) {}
  username: string = '';
  password: string = '';
  user = "toi";
  pass = "1234";

  login() {
    if (this.username == this.user && this.password == this.pass)
    {
      console.log("login success!");
      this.router.navigate(['/todolist']);
    }
    else {
      console.log("Login Fail!");
    }
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalTemplateComponent,
      componentProps: {
        "typeModal": {
          "title": "SendEmail",
          "name": "Reset Password",
          "subTitle": "Enter your email",
          "btnCancel": "Cancel",
          "btnSubmit": "Send",
          "hasFooter": "false"
        }
      }
    });
    return await modal.present();
  }

}
