import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStatusCardExampleComponent } from './info-status-card-example.component';

describe('InfoStatusCardExampleComponent', () => {
  let component: InfoStatusCardExampleComponent;
  let fixture: ComponentFixture<InfoStatusCardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoStatusCardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStatusCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
