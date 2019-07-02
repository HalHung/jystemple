import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-preview',
  templateUrl: './certificate-preview.page.html',
  styleUrls: ['./certificate-preview.page.scss'],
})
export class CertificatePreviewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

}
