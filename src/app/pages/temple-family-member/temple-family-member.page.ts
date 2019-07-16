import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple-family-member',
  templateUrl: './temple-family-member.page.html',
  styleUrls: ['./temple-family-member.page.scss'],
})
export class TempleFamilyMemberPage implements OnInit {
  from: string;

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
    this.router.navigateByUrl('/sum?from=temple-family-member');
  }

}
