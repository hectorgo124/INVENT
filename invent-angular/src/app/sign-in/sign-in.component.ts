import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService as AuthApiService } from '../core/api/services';
import { SignInUserDto } from '../core/api/models';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent implements OnInit {
  signInForm!: UntypedFormGroup;
  showAlert: boolean = false;
  loading: boolean = false;
  alert: string = '';
  success: boolean = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
    private _authApiService: AuthApiService,
    private _cdr: ChangeDetectorRef,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    // Create the form
    this.signInForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this._cdr.detectChanges();
  }

  signIn(): void {
    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.showAlert = false;

    this.loading = true;

    const user: SignInUserDto = {
      password: this.signInForm.get('password')?.value,
      username: this.signInForm.get('username')?.value,
    };

    // Sign in
    this._authApiService.authControllerSignIn({ body: user }).subscribe({
      next: (value: any) => {
        this.success = true;
        setTimeout(() => {
          // Navigate to the redirect url
          this._router.navigate(['']);
          this._authService.accessToken = value.access_token;
        }, 400);
      },
      error: (err) => {
        this.alert = 'Incorrect username or password.';

        setTimeout(() => {
          this.alert = '';
        }, 5000);

        // Re-enable the form
        this.signInForm.enable();
        this.signInForm.reset();
        this.loading = false;
      },
    });
  }
}
