import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'invent-angular';
  suscription: Subscription = new Subscription();

  logged: boolean = false;

  constructor(
    private _authService: AuthService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._authService.check().subscribe((res) => (this.logged = res));
    this.suscription = this._authService.refresh$.subscribe(() => {
      this._authService.check().subscribe((res) => (this.logged = res));
    });
  }
}
