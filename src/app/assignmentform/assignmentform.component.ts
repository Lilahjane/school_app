import { Component, Output, EventEmitter} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AssignmentStorageService } from '../assignmentstorage.service';
import { Assignment } from '../assignment';

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
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter, },
  ],
  templateUrl: './assignmentform.component.html',
  styleUrl: './assignmentform.component.scss'
})
export class AssignmentformComponent {
  constructor(public dialog: MatDialog) {}
  @Output() assignmentAdded = new EventEmitter<Assignment>();

  // ... form logic and event handling

  onSubmit(formValue: any) {
}
}
