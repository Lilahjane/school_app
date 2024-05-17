import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentformComponent } from './assignmentform.component';

describe('AssignmentformComponent', () => {
  let component: AssignmentformComponent;
  let fixture: ComponentFixture<AssignmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
