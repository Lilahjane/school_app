import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ClassesComponent } from '../classes/classes.component';
import { AssignmentsComponent } from '../assignments/assignments.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { AssignmentformComponent } from '../assignmentform/assignmentform.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    ClassesComponent,
    AssignmentsComponent
  ],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {
  constructor(private dialog: MatDialog) {}

  openAssignmentForm() {
    const dialogRef = this.dialog.open(AssignmentformComponent);
    // Optional: Handle dialog interactions (e.g., subscribing to afterClosed)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
