import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMainComponent } from './intro-main.component';

describe('IntroTenComponent', () => {
  let component: IntroMainComponent;
  let fixture: ComponentFixture<IntroMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
