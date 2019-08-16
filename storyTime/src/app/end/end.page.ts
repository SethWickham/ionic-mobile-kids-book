import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss']
})
export class EndPage implements OnInit {
  constructor(private router: Router) {}

  launchMiddle() {
    this.router.navigateByUrl('/middle');
  }
  launchHome() {
    this.router.navigateByUrl('/tabs/home');
  }

  ngOnInit() {}
}
