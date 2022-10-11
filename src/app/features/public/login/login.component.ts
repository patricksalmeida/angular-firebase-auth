import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/core/providers/firebase/request/LoginRequest.model';
import { AuthenticationService } from 'src/app/core/security/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.buildLoginForm();
  }

  buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: ['patrickalmeida@outlook.com', Validators.required],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {

  }

  handleLogin(): void {
    let loginRequest: LoginRequest = this.loginForm.value;
    this.authenticationService.login(loginRequest)
      .subscribe({
        next: response => {
          console.log(`response:`, JSON.parse(JSON.stringify(response)))
          this.router.navigate(['/app'])
        },
        error: _ => console.log(`error`)
      })
  }
}
