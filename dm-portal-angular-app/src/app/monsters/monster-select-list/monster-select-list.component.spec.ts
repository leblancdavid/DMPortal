import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterSelectListComponent } from './monster-select-list.component';

describe('MonsterSelectListComponent', () => {
  let component: MonsterSelectListComponent;
  let fixture: ComponentFixture<MonsterSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterSelectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
