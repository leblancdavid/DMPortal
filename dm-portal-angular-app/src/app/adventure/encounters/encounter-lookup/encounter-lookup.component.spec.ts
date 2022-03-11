import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterLookupComponent } from './encounter-lookup.component';

describe('EncounterLookupComponent', () => {
  let component: EncounterLookupComponent;
  let fixture: ComponentFixture<EncounterLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
