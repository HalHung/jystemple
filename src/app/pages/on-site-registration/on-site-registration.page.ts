import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-site-registration',
  templateUrl: './on-site-registration.page.html',
  styleUrls: ['./on-site-registration.page.scss'],
})
export class OnSiteRegistrationPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  sum() {
    this.router.navigateByUrl('/sum?from=on-site-registration');
  }

}
