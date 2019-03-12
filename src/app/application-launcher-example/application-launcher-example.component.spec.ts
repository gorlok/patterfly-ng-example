import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLauncherExampleComponent } from './application-launcher-example.component';

describe('ApplicationLauncherExampleComponent', () => {
  let component: ApplicationLauncherExampleComponent;
  let fixture: ComponentFixture<ApplicationLauncherExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationLauncherExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLauncherExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
