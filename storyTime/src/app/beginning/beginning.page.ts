import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.page.html',
  styleUrls: ['./beginning.page.scss']
})
export class BeginningPage implements OnInit {
  constructor(private router: Router) {}

  launchtab1() {
    this.router.navigateByUrl('/tabs/tab1');
  }
  launchMiddle() {
    this.router.navigateByUrl('/middle');
  }

  ngOnInit() {}
}
