import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private router: Router) {}

  launchBeginning() {
    this.router.navigateByUrl('/beginning');
  }
  launchMiddle() {
    this.router.navigateByUrl('/middle');
  }
  launchEnd() {
    this.router.navigateByUrl('/end');
  }
}
