import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { RouterConfig } from '../../configuration/router.config';
import { RestService } from '../../common';
import { HeaderComponent } from '../components/header/header';
import { SidebarComponent } from '../components/sidebar/sidebar';

@Component({
  selector: 'lm-app',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, SidebarComponent],
  providers: [RestService],
  templateUrl: 'core/app/app.template.html',
})
@Routes(RouterConfig)
export class AppComponent {

  constructor(restService:RestService) {

    this.restService = restService;

  }

  ngOnInit() {
    // this.restService.apiList.subscribe(()=>{
    //   console.log(this.restService.apiList);
    // });
  }

}