import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompanyComponent } from './show-company.component';

describe('ShowCompanyComponent', () => {
  let component: ShowCompanyComponent;
  let fixture: ComponentFixture<ShowCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCompanyComponent]
    });
    fixture = TestBed.createComponent(ShowCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});