import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

@Component({
  selector: 'lm-error',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'pages/error/error.template.html',
})
export class ErrorPageComponent {

  constructor(){
    this.homeTitle = `404`;
    this.homeSlogan = `That page doesn't exists!`;
  }


}