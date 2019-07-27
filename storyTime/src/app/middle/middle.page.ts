import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.page.html',
  styleUrls: ['./middle.page.scss']
})
export class MiddlePage implements OnInit {
  constructor(private router: Router) {}

  launchBeginning() {
    this.router.navigateByUrl('/beginning');
  }
  launchEnd() {
    this.router.navigateByUrl('/end');
  }

  ngOnInit() {}
}
