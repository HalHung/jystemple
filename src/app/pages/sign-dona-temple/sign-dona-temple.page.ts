import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-dona-temple',
  templateUrl: './sign-dona-temple.page.html',
  styleUrls: ['./sign-dona-temple.page.scss'],
})
export class SignDonaTemplePage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: '查無資料',
      cssClass: 'no-data-alert',
      // subHeader: 'Subtitle',
      message: '查無報名資料<br>請先提供姓名與電話',
      buttons: [
        {
          text: '取消',
        },
        {
          text: '確認',
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
  templeFamily() {
    this.router.navigateByUrl('/sign-dona-temple/temple-family-member');
  }
  newRegistration() {
    this.router.navigateByUrl('/new-registration?from=sign-dona-temple');
  }

}
