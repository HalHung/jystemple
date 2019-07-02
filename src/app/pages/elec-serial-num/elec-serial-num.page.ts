import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elec-serial-num',
  templateUrl: './elec-serial-num.page.html',
  styleUrls: ['./elec-serial-num.page.scss'],
})
export class ElecSerialNumPage implements OnInit {

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
