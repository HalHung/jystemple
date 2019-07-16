import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-preview',
  templateUrl: './certificate-preview.page.html',
  styleUrls: ['./certificate-preview.page.scss'],
})
export class CertificatePreviewPage implements OnInit {
  from: string;

  constructor(private router: Router) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    this.from = urlParams.toString();
    console.log('from=' + this.from);
  }

  print() {
    this.router.navigateByUrl('/sum/certificate-option/certificate-preview/printing?' + this.from);
  }
  homePage() {
    this.router.navigateByUrl('/home');
  }

}
