import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterInstanceEditorComponent } from './monster-instance-editor.component';

describe('MonsterInstanceEditorComponent', () => {
  let component: MonsterInstanceEditorComponent;
  let fixture: ComponentFixture<MonsterInstanceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterInstanceEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterInstanceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
