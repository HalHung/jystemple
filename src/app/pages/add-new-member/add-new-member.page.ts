import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.page.html',
  styleUrls: ['./add-new-member.page.scss'],
})
export class AddNewMemberPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

}
