import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovalidComponent } from './novalid.component';

describe('NovalidComponent', () => {
  let component: NovalidComponent;
  let fixture: ComponentFixture<NovalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
