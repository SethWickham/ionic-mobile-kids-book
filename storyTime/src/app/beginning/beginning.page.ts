import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.page.html',
  styleUrls: ['./beginning.page.scss']
})
export class BeginningPage implements OnInit {
  constructor(private router: Router) {}

  launchHome() {
    //we use /tabs/home so that our navbar will be visible upon our return to the home tab
    // because we are navigating through our tabs page
    this.router.navigateByUrl('/tabs/home');
  }
  launchMiddle() {
    this.router.navigateByUrl('/middle');
  }

  ngOnInit() {}
}
