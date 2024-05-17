import { Injectable } from '@angular/core';
import { Assignment } from './assignment';
@Injectable({
  providedIn: 'root'
})
export class AssignmentstorageService {
  private assignments: Assignment[] = [];

  constructor() {
    this.loadAssignments(); // Load assignments from local storage on initialization
  }

  getAssignments(): Assignment[] {
    return this.assignments;
  }

  addAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
    this.saveAssignments();
  }

  // ... other methods for updating, deleting, and filtering assignments
  // (implement these methods as needed)

  private loadAssignments(): void {
    const storedData = localStorage.getItem('assignments');
    if (storedData) {
      this.assignments = JSON.parse(storedData);
    }
  }

  private saveAssignments(): void {
    localStorage.setItem('assignments', JSON.stringify(this.assignments));
  }
}
