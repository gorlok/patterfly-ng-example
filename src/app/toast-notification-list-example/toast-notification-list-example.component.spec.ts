import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastNotificationListExampleComponent } from './toast-notification-list-example.component';

describe('ToastNotificationListExampleComponent', () => {
  let component: ToastNotificationListExampleComponent;
  let fixture: ComponentFixture<ToastNotificationListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastNotificationListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastNotificationListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
