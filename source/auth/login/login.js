import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import Login from './login.class';

@Component({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'auth/login/login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends Login{

  constructor(){
    super();
    console.log(this.authenticationKey);
  }

  /**
   * this function init the MLD effect to the dom
   */
  ngAfterViewInit() {
      //update dom element for MLD input/button
      componentHandler.upgradeAllRegistered();
  }

}