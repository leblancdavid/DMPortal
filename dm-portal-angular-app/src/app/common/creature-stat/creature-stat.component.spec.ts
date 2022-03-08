import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureStatComponent } from './creature-stat.component';

describe('CreatureStatComponent', () => {
  let component: CreatureStatComponent;
  let fixture: ComponentFixture<CreatureStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatureStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
