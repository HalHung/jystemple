import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  generalActPage() {
    this.router.navigateByUrl('/general-activity');
  }
  signDonaFood() {
    this.router.navigateByUrl('/sign-dona-food');
  }
  signDonaTemple() {
    this.router.navigateByUrl('/sign-dona-temple');
  }

}
