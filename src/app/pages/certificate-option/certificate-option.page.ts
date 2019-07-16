import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-option',
  templateUrl: './certificate-option.page.html',
  styleUrls: ['./certificate-option.page.scss'],
})
export class CertificateOptionPage implements OnInit {
  from: string;

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    this.from = urlParams.toString();
    console.log('from=' + this.from);
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
  preview() {
    this.router.navigateByUrl('/sum/certificate-option/certificate-preview?' + this.from);
  }

}
