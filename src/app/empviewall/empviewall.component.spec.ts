import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpviewallComponent } from './empviewall.component';

describe('EmpviewallComponent', () => {
  let component: EmpviewallComponent;
  let fixture: ComponentFixture<EmpviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpviewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
