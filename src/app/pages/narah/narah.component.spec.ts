import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarahComponent } from './narah.component';

describe('NarahComponent', () => {
  let component: NarahComponent;
  let fixture: ComponentFixture<NarahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
