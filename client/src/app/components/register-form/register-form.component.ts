import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ServerService } from 'src/app/services/server/server.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuild: FormBuilder, private server: ServerService) {
    this.registerForm = formBuild.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.server.register(this.registerForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
