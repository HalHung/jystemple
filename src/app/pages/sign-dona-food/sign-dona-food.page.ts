import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-dona-food',
  templateUrl: './sign-dona-food.page.html',
  styleUrls: ['./sign-dona-food.page.scss'],
})
export class SignDonaFoodPage implements OnInit {

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
  foodFamily() {
    this.router.navigateByUrl('/sign-dona-food/food-family-member');
  }
  newRegistration() {
    this.router.navigateByUrl('/new-registration?from=sign-dona-food');
  }

}
