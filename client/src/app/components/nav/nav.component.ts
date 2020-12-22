import { Component, OnInit } from '@angular/core';
import { faUser, faQuestion, faHome, faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faCog: IconDefinition = faCog;
  faUser: IconDefinition = faUser;
  faHome: IconDefinition = faHome;
  faQuestion: IconDefinition = faQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
