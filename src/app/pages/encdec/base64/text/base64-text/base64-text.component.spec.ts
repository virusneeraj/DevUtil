import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64TextComponent } from './base64-text.component';

describe('Base64TextComponent', () => {
  let component: Base64TextComponent;
  let fixture: ComponentFixture<Base64TextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64TextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
