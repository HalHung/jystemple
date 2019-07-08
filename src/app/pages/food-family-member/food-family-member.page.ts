import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-family-member',
  templateUrl: './food-family-member.page.html',
  styleUrls: ['./food-family-member.page.scss'],
})
export class FoodFamilyMemberPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  homePage() {
    this.router.navigateByUrl('/home');
  }
  sum() {
    this.router.navigateByUrl('/sum');
  }

}
