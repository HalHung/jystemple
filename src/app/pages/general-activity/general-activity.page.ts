import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-activity',
  templateUrl: './general-activity.page.html',
  styleUrls: ['./general-activity.page.scss'],
})
export class GeneralActivityPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

  familyMember() {
    this.router.navigateByUrl('/family-member');
  }

}
