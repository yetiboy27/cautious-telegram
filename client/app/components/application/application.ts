import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'auction-application',
  templateUrl: 'app/components/application/application.html',
  styleUrls: ['app/components/application/application.css'],
  encapsulation:ViewEncapsulation.None
})

export default class ApplicationComponent {
  constructor(private router: Router){}
}
