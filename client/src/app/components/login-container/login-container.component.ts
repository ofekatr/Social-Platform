import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  selectedLoginTab: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(e) {
    this.selectedLoginTab = e.target.id === 'login';
  }

}
