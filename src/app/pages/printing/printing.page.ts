import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.page.html',
  styleUrls: ['./printing.page.scss'],
})
export class PrintingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

}
