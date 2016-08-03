import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'lm-sidebar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'core/components/sidebar/sidebar.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent { }