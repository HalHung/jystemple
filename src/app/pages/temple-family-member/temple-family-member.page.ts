import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple-family-member',
  templateUrl: './temple-family-member.page.html',
  styleUrls: ['./temple-family-member.page.scss'],
})
export class TempleFamilyMemberPage implements OnInit {

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
