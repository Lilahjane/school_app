import { Component, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AssignmentstorageService } from '../assignmentstorage.service'; 
import { Assignment } from '../assignment'; 
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-assignmentform',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignmentform.component.html',
  styleUrls: ['./assignmentform.component.scss']
})
export class AssignmentformComponent
{
  assignments: Assignment[] = []; 

  constructor(
    private dialog:MatDialog,
    private assignmentstorageService: AssignmentstorageService 
  ) {}

  ngOnInit() {
    this.assignments = this.assignmentstorageService.getAssignments();
  }
  

  // ... form logic and event handling

  onSubmit(formValue: any) {
    const newAssignment: Assignment = {
      name: formValue.name,
      class: formValue.class,
      type: formValue.type,
      url: formValue.url || '', 
      dueDate: formValue.dueDate 
    };

  }}
