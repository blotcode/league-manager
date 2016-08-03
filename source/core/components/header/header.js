import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'lm-header',
  directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'core/components/header/header.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

 constructor(){
  this.menuItems = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Pricing', url: '/pricing'},
    {name: 'Login', url: '/login'}
  ];
 }

}