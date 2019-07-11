import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-general-activity',
  templateUrl: './general-activity.page.html',
  styleUrls: ['./general-activity.page.scss'],
})
export class GeneralActivityPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: '查無資料',
      // subHeader: 'Subtitle',
      message: '查無報名資料<br>請先填寫紙本報名表',
      buttons: [
        {
          text: '好，先離開',
          handler: () => {
            this.homePage();
          }
        }, {
          text: '已填好',
          handler: () => {
            this.newRegistration();
          }
        }
      ]
    });

    await alert.present();
  }


  homePage() {
    this.router.navigateByUrl('/home');
  }
  familyMember() {
    this.router.navigateByUrl('/family-member');
  }
  elecSerialNum() {
    this.router.navigateByUrl('/elec-serial-num');
  }
  newRegistration() {
    this.router.navigateByUrl('/new-registration');
  }

}
