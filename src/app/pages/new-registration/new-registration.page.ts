import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.page.html',
  styleUrls: ['./new-registration.page.scss'],
})
export class NewRegistrationPage implements OnInit {
  from: string;
  private test: string;

  constructor(
    private router: Router,
    // private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log('urlParams = ' + urlParams);
    // this.test = this.activatedRoute.queryParams['from'];
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  ready() {
    const urlParams = new URLSearchParams(window.location.search);
    this.from = urlParams.toString();
    console.log('url = ' + this.from);
    if (this.from === 'from=general-activity') {
      this.router.navigateByUrl('/new-registration/on-site-registration');
    } else if (this.from === 'from=sign-dona-food') {
      this.router.navigateByUrl('/sign-dona-food/food-family-member');
    } else if (this.from === 'from=sign-dona-temple') {
      this.router.navigateByUrl('/sign-dona-temple/temple-family-member');
    }
  }

}
