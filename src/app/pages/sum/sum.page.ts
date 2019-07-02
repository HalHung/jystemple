import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.page.html',
  styleUrls: ['./sum.page.scss'],
})
export class SumPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

}
