import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-option',
  templateUrl: './certificate-option.page.html',
  styleUrls: ['./certificate-option.page.scss'],
})
export class CertificateOptionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  preview() {
    this.router.navigateByUrl('/certificate-preview');
  }

}
