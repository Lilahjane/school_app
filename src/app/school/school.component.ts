import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { OverviewComponent } from '../overview/overview.component';
import { ClassesComponent } from '../classes/classes.component';
import { AssignmentsComponent } from '../assignments/assignments.component';


@Component({
  selector: 'app-school',
  standalone: true,
  imports: [
    MatTabsModule,
    OverviewComponent,
    ClassesComponent,
    AssignmentsComponent
  ],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {

}
