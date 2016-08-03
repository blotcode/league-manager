import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

@Component({
  selector: 'lm-home',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'pages/home/home.template.html',
})
export class HomeComponent {

  constructor(){
    this.homeTitle = `Together with  passion`;
    this.homeSlogan = `League Manager give you a unic platform to create your personal league,
    <br>manage your team, matches, scores and share the results!`;
  }


}