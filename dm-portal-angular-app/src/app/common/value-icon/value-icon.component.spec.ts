import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueIconComponent } from './value-icon.component';

describe('ValueIconComponent', () => {
  let component: ValueIconComponent;
  let fixture: ComponentFixture<ValueIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
