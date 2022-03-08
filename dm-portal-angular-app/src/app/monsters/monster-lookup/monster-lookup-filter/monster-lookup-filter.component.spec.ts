import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterLookupFilterComponent } from './monster-lookup-filter.component';

describe('MonsterLookupFilterComponent', () => {
  let component: MonsterLookupFilterComponent;
  let fixture: ComponentFixture<MonsterLookupFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterLookupFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterLookupFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
