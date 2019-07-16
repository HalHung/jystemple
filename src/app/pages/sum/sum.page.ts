import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.page.html',
  styleUrls: ['./sum.page.scss'],
})
export class SumPage implements OnInit {
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
  certificateOption() {
    this.router.navigateByUrl('/sum/certificate-option?' + this.from);
  }

}
