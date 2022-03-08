import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCreatorComponent } from './party-creator.component';

describe('PartyCreatorComponent', () => {
  let component: PartyCreatorComponent;
  let fixture: ComponentFixture<PartyCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
