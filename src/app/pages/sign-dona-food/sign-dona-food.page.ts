import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-dona-food',
  templateUrl: './sign-dona-food.page.html',
  styleUrls: ['./sign-dona-food.page.scss'],
})
export class SignDonaFoodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  foodFamily() {
    this.router.navigateByUrl('/food-family-member');
  }

}
