import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-record',
  templateUrl: './member-record.page.html',
  styleUrls: ['./member-record.page.scss'],
})
export class MemberRecordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
}
