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
    this.router.navigateByUrl('/tabs/home');
  }
  launchMiddle() {
    this.router.navigateByUrl('/middle');
  }

  ngOnInit() {}
}
