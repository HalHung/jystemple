import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.page.html',
  styleUrls: ['./family-member.page.scss'],
})
export class FamilyMemberPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  memberRecord() {
    this.router.navigateByUrl('/member-record');
  }
  newActivity() {
    this.router.navigateByUrl('/new-activity');
  }
}
