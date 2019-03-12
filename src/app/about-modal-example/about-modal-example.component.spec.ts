import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModalExampleComponent } from './about-modal-example.component';

describe('AboutModalExampleComponent', () => {
  let component: AboutModalExampleComponent;
  let fixture: ComponentFixture<AboutModalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutModalExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutModalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
