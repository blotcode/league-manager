import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'auth/signup/signup.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {

  /**
   * this function init the MLD effect to the dom
   */
  ngAfterViewInit() {
      //update dom element for MLD input/button
      componentHandler.upgradeAllRegistered();
  }
}