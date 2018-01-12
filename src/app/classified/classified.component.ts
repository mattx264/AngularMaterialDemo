import { Component, OnInit } from '@angular/core';


@Component({
  template: `<ul class="sub-nav">
    <li class="nav" [routerLinkActive]="['active']"><a [routerLink]="['\search-users']">SEARCH USERS</a></li>
    <li><span class="break-line"></span></li>
    <li class="nav" [routerLinkActive]="['active']"><a [routerLink]="['\add-users']">ADD EMPLOYEE</a></li>
    <li><span class="break-line"></span></li>
    <li class="nav" [routerLinkActive]="['active']"><a [routerLink]="['\add-non-employee']">ADD NON-EMPLOYEE</a></li>
  </ul><router-outlet></router-outlet>`,
  providers: []
})
export class ClassifiedModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
