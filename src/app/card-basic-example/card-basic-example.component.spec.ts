import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBasicExampleComponent } from './card-basic-example.component';

describe('CardBasicExampleComponent', () => {
  let component: CardBasicExampleComponent;
  let fixture: ComponentFixture<CardBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBasicExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
