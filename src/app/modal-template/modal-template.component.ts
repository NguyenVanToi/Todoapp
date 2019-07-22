import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class ModalTemplateComponent implements OnInit {

  modalTemplate : any;
  email: string;
  @Input() typeModal: object;
  constructor(private modalCtrl: ModalController, public modalParams: NavParams) {
    this.modalTemplate = this.modalParams.get("typeModal");
    console.log(this.modalTemplate);
  }

  

  ngOnInit() {
    let hasFooter = this.modalTemplate.hasFooter;
    console.log(this.typeModal);
  }
  
  sendEmail() {
    console.log(this.email);
    
  }
  async modalCodeReceived() {
    const modal = await this.modalCtrl.create({
      component: ModalTemplateComponent,
      componentProps: {
        "typeModal": { 
          "title": "NewPassword",
          "name": "Reset Password",
          "subTitle": "A verify code was sent to your mail. Please check your mail inbox to got its",
          "btnCancel": "Cancel",
          "btnSubmit": "Submit",
          "hasFooter": "false"
        }
      }
    });
    return await modal.present();
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
