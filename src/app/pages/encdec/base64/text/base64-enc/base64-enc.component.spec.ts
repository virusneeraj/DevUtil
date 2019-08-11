import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64EncComponent } from './base64-enc.component';

describe('Base64EncComponent', () => {
  let component: Base64EncComponent;
  let fixture: ComponentFixture<Base64EncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64EncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64EncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
