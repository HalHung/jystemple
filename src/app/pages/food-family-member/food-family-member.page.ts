import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-family-member',
  templateUrl: './food-family-member.page.html',
  styleUrls: ['./food-family-member.page.scss'],
})
export class FoodFamilyMemberPage implements OnInit {
  from: String;

  constructor(private router: Router) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    this.from = urlParams.toString();
    console.log('from=' + this.from);
  }
  homePage() {
    this.router.navigateByUrl('/home');
  }
  sum() {
    this.router.navigateByUrl('/sum?from=food-family-member');
  }

}
