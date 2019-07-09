import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-dona-temple',
  templateUrl: './sign-dona-temple.page.html',
  styleUrls: ['./sign-dona-temple.page.scss'],
})
export class SignDonaTemplePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  templeFamily() {
    this.router.navigateByUrl('/temple-family-member');
  }

}
